import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Filter = ({
  onSearchMovie,
  search
}) => {
  return (
    <div className='filter-style'>
      <Input
        placeholder="Search Movies..."
        size="large"
        value={search} onChange={onSearchMovie}
        prefix={<SearchOutlined />}
      />
    </div>
  )
}

export default Filter;