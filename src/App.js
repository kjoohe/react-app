import './App.css';
import { Component } from 'react';
import { Subject } from './Subject';
import  {TOC}  from './TOC';
import  {ReadContent}  from './ReadContent';
import Control from './Control';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';


//부모역할을 하는 App 컴포넌트에서 데이터를 가지고 자식 컴포넌트에게 해당 데이터를 넘겨준다.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {
        title: 'welcome',
        desc: 'Hello, React!'
      },
      subject: { title: 'WEB', sub: 'World Wide Web' },
      contents: [
        { id: 1, title: 'html', desc: 'HTML IS HyperText Markup Language.' },
        { id: 2, title: 'css', desc: 'CSS is for design' },
        { id: 3, title: 'js', desc: 'Javascript is interactive' }
      ]
    }
  }

    //let content 함수로 만들기(조회와 수정 컴포넌트가 공통으로 사용하기 위해서(여러번 호출되니까))
    findContentById(){
      //선탣된 요소 (html, css,js)의 id에 해당하는 객체 찾기
      let content;
      for(let i =0; i< this.state.contents.length; i++){
        if(this.state.id == this.state.contents[i].id){
          content = this.state.contents[i];
          break;
        }
      }
      return content;
    }

  render() {
    let title, desc;
    let article;
    if (this.state.mode === 'welcome') {
      // 11
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;

    }else if(this.state.mode === 'update') {
      const content = this.findContentById();
      console.log(content);
      if(content == undefined){
        alert('제목을 선택해주세요')
      }else{
            title = content.title;
            desc = content.desc;
            article = <UpdateContent title={title} desc={desc}
            onSubmit={function(title, desc) {
            content.title = title;
            content.desc = desc;
            this.setState({mode: 'read'});
            }.bind(this)}></UpdateContent>
            
      }

    }else if(this.state.mode === 'read') {
      const content = this.findContentById();
      title = content.title;
      desc = content.desc;

    } else if(this.state.mode === 'create') {
      article = <CreateContent
      onSubmit={function(title, desc) {
      console.log(title, desc);
      this.state.contents.push({
      id: this.state.contents.length + 1,
      title: title,
      desc: desc
      });
      //중요코드
      this.setState({
      contents: this.state.contents
      })

      }.bind(this)}></CreateContent>
    }
    

    return (
      <div className="App">

        <Subject title={this.state.subject.title} 
                 sub={this.state.subject.web}></Subject>

        <TOC onChangePage={
          (value) => {this.setState({id: value, mode: 'read'})
          }} contents={this.state.contents} ></TOC>

        <Control onChangeMode={function (mode) {
          if (mode === 'delete') {
          const contents = this.state.contents;
          if (window.confirm('really?')) {
          for (let i = 0; i < contents.length; i++) {
          if (contents[i].id === this.state.id) {
         contents.splice(i, 1);
        }
      }
    }
        this.setState({
        mode: 'welcome', contents: contents
        });
        } else {
        this.setState({ mode: mode });
          }
         }.bind(this)}></Control>

        {/* 조회와 수정 컴포넌트에서 title, desc*/}
        <ReadContent title={title} desc={desc}></ReadContent>

        {article}
      </div >
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <table border="1">
//         <tr>
//           <td>1</td>
//           <td>2</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

export default App;