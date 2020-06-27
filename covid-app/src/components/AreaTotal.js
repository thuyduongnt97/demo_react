import React, { Component } from 'react';


class AreaTotal extends Component {
    render(){
        const {table_country} = this.props
        const data = [
            {'BacMy' : (table_country.find(country => country.country === 'Bắc Mỹ'))},
            {'ChauAu' : (table_country.find(country => country.country === 'Châu Âu'))},
            {'ChauA' : (table_country.find(country => country.country === 'Châu Á'))},
            {'NamMy' : (table_country.find(country => country.country === 'Nam Mỹ'))},
            {'ChauPhi' : (table_country.find(country => country.country === 'Châu Phi'))}
        ]
        return (
            <>  
                {console.log(table_country)}
                <main className ="ant-layout-content content-covid">
                    <div className = "ant-row">
                        <div className="ant-col ant-col-22 ant-col-offset-1">
                            <div className ="ant-row">
                                <div className="ant-col ant-col-12 ant-col-offset-6">
                                    <h2 className="title_cate center">Covid-19 theo khu vực</h2>
                                    <div className="box-thongke box-thongke-thegioi">
                                        <div className="flex">
                                            {data}
                                            <div className="item active ca-nhiem">
                                                <span ></span>
                                                <p> 
                                                    <i></i>
                                                    <strong></strong> 
                                                    <span ></span>
                                                </p>
                                                
                                            </div>
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

export default AreaTotal;