import React, { Component, memo } from 'react';
const span2Style = {
    marginTop: '7px',
    marginLep: '5px'
}
const span1Style = {
    margin: '0px 0px 5px 0px',
}
const pStyle = {
    lineHeight : '0.8'
}
  
class AreaTotal extends Component {
    render(){
        const {table_area} = this.props
        
        return (
            <>  
                {console.log(table_area)} 
                {/* {console.log(table_area[1])}  */}
                {/* {console.log(data)} 
                   (data.map((da) => console.log(da)))
                */}
                <main className ="ant-layout-content content-covid">
                    <div className = "ant-row">
                        <div className="ant-col ant-col-22 ant-col-offset-1">
                            <h2 className="title_cate center">Covid-19 theo khu vực</h2>
                            <div className="box-thongke box-thongke-thegioi">
                                <div className="flex">
                                    {table_area.map((data,key) => 
                                        htmlData(data,key)
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
const htmlData = (data,key) =>{
    
    return (
        <>
            <div className="item active ca-nhiem" id = {key}>
                <span style={span1Style}>{data.country_vn}</span>
                <p style={pStyle}> 
                    <i>Nhiễm: </i> <strong>{data.total_cases}</strong> 
                    <span style={span2Style}>{data.new_cases}</span>
                </p>
                <p style={pStyle}> 
                    <i>Tử vong: </i> <strong>{data.total_deaths}</strong> 
                    <span style={span2Style}>{data.new_deaths}</span>
                </p>
                <p style={pStyle}> 
                    <i>Khỏi: </i> <strong>{data.total_recovered}</strong> 
                    <span style={span2Style}>{data.new_recovered}</span>
                </p>
            </div>
        </>
    );
}

export default AreaTotal;