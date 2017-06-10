import React, { Component } from 'react';
import axios from 'axios';

class ProductWrite extends Component {

    constructor(){
        super();
        this.state = {
            categoryList : []
        };

        this.valueCheck = this.valueCheck.bind(this);
    }

    componentDidMount(){
        axios.get('/api/admin/getProductCategory', {
        }).then( (res) => {
            this.setState({
                categoryList : res.data
            }, this.valueCheck );
        }).catch( (error) => {
            console.log(error);
        });
    }

    valueCheck(){
        console.log(this.state.categoryList[0]);
    }


    render() {
        return (
            <div>
                <h3>제품등록</h3>
                <table className="table table-bordered table-hover">
                    <tbody> 
                        <tr>
                            <th>제품명</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>제품이지</th>
                            <td>
                                <input type="file" />
                            </td>
                        </tr>
                        <tr>
                            <th>카테고리</th>
                            <td>
                                <select name="" id="" style={ { width: "20%"} }  className="form-control">
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>
                                <input type="text" className="form-control" style={{ width : "15%" }}/>
                            </td>
                        </tr>
                        <tr>
                            <th>할인가</th>
                            <td>
                                <input type="text" className="form-control" style={{ width : "15%" }} />
                            </td>
                        </tr>
                        <tr>
                            <th>설명</th>
                            <td>
                                <textarea className="form-control"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductWrite;