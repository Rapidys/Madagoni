import React from 'react';
import TreeNode from "./RTreeNode";

const Tree = (props) => {
  return (
    <div className={"d-tree"}>
      <ul className={"d-flex d-tree-container flex-column"}>

        <TreeNode node={props.data}
                  SetOpen={props.SetOpen}
                  getValueFromTree={props.getValueFromTree}
        />


      </ul>
    </div>
  );
};


export default Tree;
