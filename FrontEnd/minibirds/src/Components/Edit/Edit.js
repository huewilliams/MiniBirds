import React, {Component} from 'react';
import './Edit.css';
import axios from 'axios';
import base_url from '../../base_url';

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            pw: '',
            nickname: '',
            intro : '',
         }
      }
    render() {
        this.handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        this.handleModify = () => {
            axios
                .put(
                    `${base_url}/edit/${this.state.id}`, {
                        nickname: this.state.nickname,
                        password: this.state.pw,
                        intro: this.state.intro
                    }, {
                        header: {
                            'Authorization': `bearer ${localStorage.getItem('token')}`,
                        },
                    })
        }
    return (
        <div className="input-box">
            <table>
                <tr>
                    <td><div className="input-letter">아이디</div></td>
                    <td><div className="input-info">{this.state.id}</div></td>
                </tr>
                <tr>
                    <td><div className="input-letter">현재 비밀번호</div></td>
                    <td><div className="input-info">{this.state.pw}</div></td>
                </tr>
                <tr>
                    <td><div className="input-letter">새 비밀번호</div></td>
                     <td><input className="input-info" onChange={this.handleChange} value={this.state.pw} name="pw"/></td>
                </tr>
                <tr>
                    <td><div className="input-letter">닉네임</div></td>
                    <td><input className="input-info" placeholder={this.state.nickname} onChange={this.handleChange} value={this.state.nickname} name="nickname"/></td>
                </tr>
                <tr>
                    <td><div className="input-letter">한줄소개</div></td>
                    <td><textarea className="input-intro" placeholder={this.state.intro} onChange={this.handleChange} value={this.state.intro} name="intro"/></td>
                </tr>
            </table>
            
            <button className="accept-edit-btn" onClick={this.handleModify}>수정하기</button>
            
        </div>
    );
    }
}

export default Edit;