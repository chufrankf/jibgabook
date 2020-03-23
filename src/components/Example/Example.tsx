import * as React from 'react'
import Button from '@material-ui/core/Button';
import './Example.css'

export class Example extends React.PureComponent {
  render() {
    return <Button><div className="Example">Example Button</div></Button>
  }
}
