import React, {Component} from 'react';
class UpdateContent extends Component {
    constructor(props){  //규칙, 공식 외워야하는 내용
        super(props);    //<== 여기까지 공식

        //한꺼번에 여러개를 담을 수 있는 형태
        //객체, 배열, 클래스
        this.state ={
        title: this.props.title, //콜론
        desc: this.props.desc
            
        }
    }
render() {
return (
<article>
<h2>Update Content</h2>
<form action='/update_process' method='post'
onSubmit={function(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    this.props.onSubmit(title, desc);
    }.bind(this)}>

<p><input type='text' name='title' 
value={this.state.title} onChange={(e)=>{
    this.setState({title: e.target.value});
}}></input></p>

<p><textarea name='desc' 
value={this.state.desc} onChange={(e)=>{
    this.setState({desc: e.target.value});
}}></textarea></p>

<p><input type='submit'></input></p>
</form>
</article>
)
}
}
export default UpdateContent;