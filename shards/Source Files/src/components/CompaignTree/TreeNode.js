import React, {useCallback, useState} from 'react';
import Tree from "./Tree";
import {useSelector} from "react-redux";


const TreeNode = (props) => {
  const [visibility, setVisibility] = useState(false)
  // let date = useSelector(state => state.chosenData.endDate)

  const setChosen = useCallback(
    () => {
      props.handleSetNodeValue({
          firstName: props.node.firstName,
          lastName: props.node.lastName,
          userId: props.node.userId,
          departmentId: props.node.departmentId,
        }
      )
    },
    [],
  );

  const setDepartment = () => {
    props.handleSetDepValue && props.handleSetDepValue({
      displayName: props.node.displayName,
      departmentId: props.node.departmentId,
    })

  }

  const hasChild = props.node.departments ? true : false
  const hasEmployes = props.node.employes ? true : false
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
          {props.node.displayName
            ? <i className="mr-2 mt-1 fas fa-university"/>
            : <i className="ml-4 mr-2 mt-1 fas fa-user"/>
          }


          {
            <span>
              <span
                onClick={setDepartment}
              >{props.node.displayName}</span>
              <span
                style={{cursor: "pointer"}}
                onClick={setChosen}
              >{props.node.firstName} {props.node.lastName}</span>
            </span>


          }
        </div>
      </div>
      {hasEmployes && visibility && props.node.employes.map(empl => {
        return <div className={"d-tree-content"} key={empl.userId}>
          <ul className={"d-flex d-tree-container flex-column"}>
            <Tree data={empl}
                  handleSetDepValue={props.handleSetDepValue}
                  handleSetNodeValue={props.handleSetNodeValue}
            />
          </ul>
        </div>
      })
      }

      {hasChild && visibility && props.node.departments.map(dep => {
        return <div className={"d-tree-content"} key={dep.departmentId}>
          <ul className={"d-flex d-tree-container flex-column"}>
            <Tree data={dep}
                  handleSetDepValue={props.handleSetDepValue}
                  handleSetNodeValue={props.handleSetNodeValue}

            />
          </ul>
        </div>
      })}

    </li>
  );
};

export default TreeNode;
