import React from 'react';
import HornedBeasts from './HornedBeasts';
import Horned from './Horned.json'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numHorn: Horned,


    }
  }
  onChangeNum = (event) => {
    event.preventDefault();
    let newArr = [];

    newArr = Horned.filter(el => {

      if (Number(event.target.value )=== el.horns) {
        return true;
      }
    })
    
    if (event.target.value === '0') {
      this.setState({

        numHorn: Horned,

      })
    }

this.setState({

      numHorn: newArr,

    })

  }


  render() {

    return (
      <div>
        <Form >
          <Form.Group aria-label="Default select example">
            <Form.Label>Filter By Number Of Horns</Form.Label>
            <Form.Control as='select' name='numOfhorn' onChange={this.onChangeNum}>
              <option valur="0">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">WOW...</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {
          this.state.numHorn.map((item, index) => {
            return (
              <HornedBeasts modeldata={this.props.modeldata} dataselected={this.props.dataselected} title={item.title} img_url={item.image_url} description={item.description} key={index} />
            )
          })
        }


      </div>
    )

  }
}
export default Main;


