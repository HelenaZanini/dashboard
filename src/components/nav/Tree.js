import React from "react";
import { TreeSelect as TreeSelectAntd } from 'antd';

const SHOW_PARENT = TreeSelectAntd.SHOW_PARENT;

const treeData = [{
  label: 'Selecionar todas',
  value: '0-1',
  key: '0-1',
  children: [
    {
      label: 'BAML',
      value: '0-1-0',
      key: '0-1-0',
    }, {
      label: 'Bradesco',
      value: '0-1-1',
      key: '0-1-1',
    }, {
      label: 'Itau BBA',
      value: '0-1-2',
      key: '0-1-2',
    }, {
      label: 'ING',
      value: '0-1-3',
      key: '0-1-3',
    }, {
      label: 'ABC',
      value: '0-1-4',
      key: '0-1-4',
    },
    {
      label: 'PINE',
      value: '0-1-5',
      key: '0-1-5',
    },{
      label: 'Outros',
      value: '0-1-6',
      key: '0-1-6',
    }
  ],
}];

class TreeSelectMeu extends React.Component {
  state = {
    value: ['0-0-0'],
  }

  /*   onChange = (value) => {
      console.log('onChange ', value, arguments);
      this.setState({ value });
    } */
  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Selecione a empresa',
      style: {
        width: 300,
      },
    };

    return <TreeSelectAntd {...tProps} />;
  }
}

export default TreeSelectMeu;