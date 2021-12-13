import React, {useState} from 'react';
import Tree from "./RTree";
import styled from "styled-components";
import {useSelector} from "react-redux";

let Styles = styled.span`
  .nameWrapper {
    max-width: 150px;
    overflow-wrap: break-word;
    white-space: pre-wrap;

  }

`


const TreeNode = (props) => {
  let treeData = useSelector((state => state.Tree.Structure))

  let addUserInDepartment = () => {
    props.getValueFromTree(props.node)
    props.SetOpen(true)
  }

  const [visibility, setVisibility] = useState(false)


  const hasChild = !!props.node.departments
  const hasEmployes = !!props.node.employes

  return (
    <li className={"d-tree-node border-0"}>
      <div className={"d-flex"}

      >
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${visibility ? 'active' : ''}`}>
            <i className="fas fa-plus-square mr-2"
               onClick={(e) => {
                 setVisibility(v => !v)
               }}
            />

          </div>
        )}

        <div className={"col d-tree-head"}>


          {
            <span>
                <Styles>
                 <div onClick={addUserInDepartment}>
                    {props.node.displayName &&
                    <i className="mr-2 mt-1 fas fa-university"
                    />}
                   <span
                     className={"nameWrapper"}
                   >{props.node.displayName}</span>
                 </div>

                </Styles>
              {props.node.firstName &&
              <i className="ml-2 mr-2 mt-1 fas fa-user"/>}
              <span
                style={{cursor: "pointer"}}
              >{props.node.firstName} {props.node.lastName}</span>
            </span>


          }
        </div>
      </div>
      {hasEmployes && visibility && props.node.employes.map(empl => {
        return <div className={"d-tree-content"} key={empl.userId}>
          <ul className={"d-flex d-tree-container flex-column"}>
            <Tree data={empl}
                  getValueFromTree={props.getValueFromTree}
                  SetOpen={props.SetOpen}
            />
          </ul>
        </div>
      })
      }

      {hasChild && visibility && props.node.departments.map(dep => {
        return <div className={"d-tree-content"} key={dep.departmentId}>
          <ul className={"d-flex d-tree-container flex-column"}>
            <Tree data={dep}
                  getValueFromTree={props.getValueFromTree}
                  SetOpen={props.SetOpen}
            />
          </ul>
        </div>
      })}

    </li>

  );
};

export default TreeNode;
