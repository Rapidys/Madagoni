import React from 'react';
import SearchForms from "./SearchForms/SearchForms";
import DocumentList from "./DocumentsList/DocumentList";

import DocHeaderTitles from "./DocHeaderTitles/DocHeaderTitles";


const Documents = () => {
  return (
    <div>

      <SearchForms/>
      <div style={{marginTop: 100}}>
        <DocHeaderTitles/>
        <DocumentList/>
      </div>

    </div>

  );
};

export default Documents;
