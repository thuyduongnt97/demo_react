import React, { Component } from 'react';

class WorldTotal extends Component{

    render(){
        const {table_world} = this.props
        return (
            <>
{/* {console.log(table_world)} */}
                <main className ="ant-layout-content content-covid">
                    <div className = "ant-row">
                        <div className="ant-col ant-col-22 ant-col-offset-1">
                            <div className ="ant-row">
                                <div className="ant-col ant-col-12 ant-col-offset-6">
                                    <h2 className="title_cate center">Covid-19 trên thế giới</h2>
                                    <div className="count-covid-thegioi flex">
                                        <div className ="item nhiem">
                                            <label>Nhiễm</label>
                                            <strong>{table_world.total_cases}</strong>
                                            <p>{table_world.new_cases} (mới nhiễm)</p>
                                        </div>
                                        <div className ="item tuvong">
                                            <label>Tử vong</label>
                                            <strong>{table_world.total_deaths}</strong>
                                            <p>{table_world.new_deaths} (mới chết)</p>
                                        </div>
                                        <div className ="item khoi">
                                            <label>Khỏi</label>
                                            <strong>{table_world.total_recovered}</strong>
                                            <p>{table_world.new_recovered} (mới khỏi)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

// const WorldTotal = (table_world) => {

//     return (
//         <>
//             <main className ="ant-layout-content content-covid">
//                 {console.log(table_world)}
//                 <div className = "ant-row">
//                     <div className="ant-col ant-col-22 ant-col-offset-1">
//                         <div className ="ant-row">
//                             <div className="ant-col ant-col-12 ant-col-offset-6">
//                                 <h2 className="title_cate center">Covid-19 trên thế giới</h2>
//                                 <div className="count-covid-thegioi flex">
//                                     <div className ="item nhiem">
//                                         <label>Nhiễm</label>
//                                         <strong>{table_world.total_cases}</strong>
//                                         <p></p>
//                                     </div>
//                                     <div className ="item tuvong">
//                                         <label>Tử vong</label>
//                                         <strong>{table_world.total_deaths}</strong>
//                                         <p></p>
//                                     </div>
//                                     <div className ="item khoi">
//                                         <label>Khỏi</label>
//                                         <strong>{table_world.total_recovered}</strong>
//                                         <p></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )

// }

export default WorldTotal;