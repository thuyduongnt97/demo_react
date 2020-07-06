import React from 'react';
// import Table from 'react-bootstrap/Table'
import BootstrapTable from 'react-bootstrap-table-next';  
import filterFactory, { textFilter,selectFilter} from 'react-bootstrap-table2-filter';  
import paginationFactory from 'react-bootstrap-table2-paginator';  

const Nation = (table_nation) => {
    let options = table_nation.table_nation.map(item => item.country_vn)
    let columnsField = [
        {   
            dataField: 'country_vn',   
            text: 'Quốc gia:   ', 
            sort: true, 
            filter: textFilter() 
        },
        { dataField: 'total_cases',   text: 'Nhiễm', sort: true},
        { dataField: 'new_cases',   text: 'Mới nhiễm', sort:true},
        { dataField: 'total_deaths',   text: 'Tử vong', sort :true},
        { dataField: 'new_deaths',   text: 'Mới tử vong', sort:true},
        { dataField: 'total_recovered',   text: 'Mới bệnh', sort: true}
    ]
    return (
        <main className ="ant-layout-content content-covid">
            <div className = "ant-row">
                <div className="ant-col ant-col-22 ant-col-offset-1">
                    <h2 className="title_cate center">Covid-19 các quốc gia</h2>
                    <div className="ant-table-wrapper">
                        <div className = "ant-table-content">
                        <div style={{ marginTop: 20 }}>
                            <BootstrapTable   
                            striped  
                            hover  
                            keyField='id'   
                            data={table_nation.table_nation }   
                            columns={ columnsField }  
                            pagination={ paginationFactory() }
                            filter={ filterFactory()}

                        />  
                        </div>
                       
                            {/* <Table className="striped bordered hover responsive" >

                                <thead className="ant-table-thead">
                                    <tr>
                                        <th>Quốc gia</th>
                                        <th>Nhiễm</th>
                                        <th>Mới nhiễm</th>
                                        <th>Tử vong</th>
                                        <th>Mới tử vong</th>
                                        <th>Khỏi bệnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table_nation.table_nation.map((data,key) => 
                                        htmlData(data,key)
                                    )}
                                </tbody>
                            </Table> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

const htmlData = (data,key) =>{
    let styleTd = {
        background: 'rgb(34, 34, 34)',
        color: 'rgb(255, 255, 255)'
    }
    return (
        <>
        {/* {console.log(data)} */}
            <tr>
                <td className="ant-table-cell">{data.country_vn}</td>
                <td className="ant-table-cell">{data.total_cases}</td>
                <td className="ant-table-cell"> {data.new_cases !== ''? <button className="ant-btn ant-btn-primary ant-btn-dangerous"> {data.new_cases}</button> : ``}  </td>
                <td className="ant-table-cell">{data.total_deaths}</td>
                <td className="ant-table-cell"><button className="ant-btn ant-btn-ghost" style={styleTd}>{data.new_deaths}</button></td>
                <td className="ant-table-cell">{data.total_recovered}</td>
            </tr>
        </>
    );
}
export default Nation;