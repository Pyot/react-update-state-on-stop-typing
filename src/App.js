import React, { Component } from 'react'

class ForHeavyData extends Component {
  state = {
    value: ''
  }

  timer = null

  handleChange = (e) => {
    clearTimeout(this.timer);
    let value = e.target.value;
    this.timer = setTimeout(() => { this.triggerChange(value) }, 2000);
  }

  triggerChange = (targetValue) => {
    this.setState({ value: targetValue })
  }

  render() {

    return (
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-6'}>
            <div className={"form-group"}>
              <label forHtml="exampleInputEmail1"></label>
              <input
                className={'form-control'}
                placeholder={'Please type text...'}
                defaultValue={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown} />
              <small className={"form-text text-muted"}>You'll see what you type after 2sec when you stop typing below.</small>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-md-6'}>
            <div className={'redborder'}>
              {this.state.value !== '' ? this.state.value : 'You will see updated state here'}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ForHeavyData