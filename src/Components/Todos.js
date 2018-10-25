import React, {Component} from 'react';
import db from '../FirestoreConfig';

class Todo extends Component {


    //Es parte del ciclo de vida
  constructor() {
        super();
        this.state = {
            items: [],
            task: []
        }
    }


    //Esto se da antes de el dom
    componentDidMount() {
        db.collection("todos").get().then((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    console.log(doc.id, doc.data());
                })
            })

        })

    }


    render() {

        return (

            <div>
                hoal como estas esto debe imprimirse
            </div>
        )


    }

}

export default Todo;