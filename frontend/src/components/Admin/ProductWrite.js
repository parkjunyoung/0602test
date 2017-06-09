import React, { Component } from 'react';

class ProductWrite extends Component {
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
                            <th>섬네일</th>
                            <td>
                                <input type="file" />
                            </td>
                        </tr>
                        <tr>
                            <th>카테고리</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>할인가</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>설명</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductWrite;