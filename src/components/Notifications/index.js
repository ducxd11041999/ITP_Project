import React, {Component} from 'react';
import AlertDialogSlide from './../Dialog/index';
import Button from '@material-ui/core/Button';
class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            log:{
                title: "CẢNH BÁO VI PHẠM",
                content : "Bạn vui lòng đeo khẩu trang trước khi vào cửa"
            },
            userClick: ''
        }
    } 
    handleClickOpen = () =>{
        console.log("ok");
        this.setState({
            open: true
        })
    }
    handleClose = (params) => {
        this.setState({
            open: false,
            userClick: params
        })
        console.log(params)
    };  
    render (){
        return (
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen} >
                    Result Checkin
              </Button>
                    <AlertDialogSlide open = {this.state.open} 
                    handleClose = {this.handleClose}
                    log = {this.state.log}
                    />
            </div>
        );
    }
}

export default Notification