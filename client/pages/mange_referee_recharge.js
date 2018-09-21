import RefereeHeader from "./refereeheader";
var React = require('react');
import {SearchBar,NavBar,List,InputItem,TextareaItem} from 'antd-mobile';
import { Form, Icon,Button, Input,Select,Radio} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
import '../public/css/managerrecharge.css';
class RefereeRecharge extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ID:'14',
            beizhu:'充值经理',
            dqjf:'794450',
            money:0
        };
    }

    tenoClick(e,es){
        const Number =parseInt(e.target.attributes['number'].value);
        console.log( es,e.target.attributes['number'].value,this.props);
        this.props.form.setFieldsValue({
            inputValue:this.state.money+Number
        })
        this.setState(
            {money:this.state.money+Number}
        );
    }

    cleanClick(){
        this.setState(
            {money:0}
        );
        this.props.form.setFieldsValue({
            inputValue:this.state.money
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return(
            <div>
                <RefereeHeader/>
                <NavBar style={{background:'#606060'}}>充值</NavBar>
                <div className="my_integration">我的积分：{this.state.dqjf}</div>
                <List className="my-list">
                        <Item>
                            ID:<Input type="phone" defaultValue={this.state.ID} style={{border:'0px',fontSize:'17px'}} ></Input>
                        </Item>
                        <Item>
                            备注:<Input type="phone" defaultValue={this.state.beizhu} style={{border:'0px',fontSize:'17px'}}></Input>
                        </Item>
                        <Item>
                            金额:<Input type="phone" defaultValue={this.state.dqjf} style={{border:'0px',fontSize:'17px'}}></Input>
                        </Item>
                        <Item>
                            充值金额:<Input type="phone" defaultValue={this.state.dqjf} style={{border:'0px',width:"120px",fontSize:'17px'}}></Input><Button size="small" type="primary" htmlType="submit"
                                        style={{verticalAlign: 'middle', marginLeft: '30px'}} onClick={this.cleanClick.bind(this)}>
                                    清空
                            </Button>
                        </Item>
                </List>
                        <Item>
                            <div style={{textAlign:'center'}}>
                                <Button id='ten' size="small" type="primary"  number="10" inline style={{verticalAlign: 'middle', marginLeft: '15px'}} onClick={this.tenoClick.bind(this)}>十</Button>
                                <Button id='hundred' size="small" type="primary"  onClick={this.tenoClick.bind(this)}  number="100" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一百</Button>
                                <Button id='thousand' size="small" type="primary" onClick={this.tenoClick.bind(this)} number="1000" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一千</Button>
                                <Button id='thousand' size="small" type="primary" onClick={this.tenoClick.bind(this)} number="10000" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一万</Button>
                                <Button id='ttousand' size="small" type="primary" onClick={this.tenoClick.bind(this)} number="100000" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>十万</Button>
                            </div>
                        </Item>
                <Button type="primary"  size="large" style={{width:'100%'}}>确认充值</Button>
            </div>
        );
    };
}
export default RefereeRecharge = Form.create({})(RefereeRecharge);