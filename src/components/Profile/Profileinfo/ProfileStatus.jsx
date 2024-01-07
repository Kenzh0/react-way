import React, {Fragment} from 'react';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    };
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    };
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };
    
    componentDidUpdate(prevProps, prevStatus) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    
    render() {
        return (
          <Fragment>
              <div>
                  {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                  }
              </div>
              <div>
                  {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.props.status}/>
                  }
              </div>
          </Fragment>
        )
    }
}

export default ProfileStatus;