import React from 'react';


const WorldTotal = (props) => {
    const {data_total} = props
    return (
        <main className ="ant-layout-content content-covid">
        {console.log(data_total)}
            <div className = "ant-row">
                <div className="ant-col ant-col-22 ant-col-offset-1">
                    <div className ="ant-row">
                        <div className="ant-col ant-col-12 ant-col-offset-6">
                            <h2 className="title_cate center">Covid-19 trên thế giới</h2>
                            <div className="count-covid-thegioi flex">
                                <div className ="item nhiem">
                                    <label>Nhiễm</label>
                                    <strong>{data_total.total_cases}</strong>
                                    <p></p>
                                </div>
                                <div className ="item tuvong">
                                    <label>Tử vong</label>
                                    <strong>{data_total.total_deaths}</strong>
                                    <p></p>
                                </div>
                                <div className ="item khoi">
                                    <label>Khỏi</label>
                                    <strong>{data_total.total_recovered}</strong>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default WorldTotal;