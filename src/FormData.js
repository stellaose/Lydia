import  { useState } from "react";
import Register  from './Redux/Action/FormAction';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import './Stylesheets/Form.css';


const FormData = () => {
  const dispatch = useDispatch();

  const history = useHistory();
 

  const [values, setValues] = useState({
    name: "",
    preference: "",
    knowledge: "",
    room: "",
    date: "",
    price: "",
  });

  const {name, preference, knowledge, room, date, price} = values;
  const [submitted, setSubmitted] = useState(false);
  const [valid, SetValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handlePreferenceInputChange = (event) => {
    setValues({ ...values, preference: event.target.value });
  };

  const handleKnowledgeInputChange = (event) => {
    setValues({ ...values, knowledge: event.target.value });
  };

  const handleRoomInputChange = (event) => {
    setValues({ ...values, room: event.target.value });
  };

  const handleDateInputChange = (event) => {
    setValues({ ...values, date: event.target.value });
  };

  const handlePriceInputChange = (event) => {
    setValues({ ...values, price: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.name &&
      values.preference &&
      values.knowledge &&
      values.room &&
      values.date &&
      values.price    ) {
      SetValid(true);
    }
    setSubmitted(true);

    dispatch(Register(name, preference, knowledge, room, date, price, history))
  }

  return (
    <>
      <div className = 'form-div'>
          <h3>Please fill all fields</h3>
            <form action="/" onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className = 'success'>
                  Success! See you on the other side.
                </div>
              ) : null}
               
                <div className = 'form-data'>
                <label htmlFor = 'name'>
                  <div>
                    <p>What is your name?</p>
                  </div>
                </label>
                <input
                  autoComplete="off"
                  onChange={handleNameInputChange}
                  value={values.name}
                  type="text"
                  name="name"
                  placeholder="Joy..."
                />
                
              </div>

              <div className = 'form-data'>
                <label htmlFor = 'preference'>
                    {submitted && !values.preference ? (
                    <span>Please select your preference</span>
                  ) : null}
                    <div>
                      <p >What style defines you? </p>
                    </div>
                 
                  
                </label>
                <input
                  autoComplete="off"
                  onChange={handlePreferenceInputChange}
                  value={values.preference}
                  type="text"
                  name="preference"
                  placeholder="Minimalist style..."
                />
              </div>

              <div className = 'form-data'>
                <label htmlFor = 'knowledge'>
                  {submitted && !values.knowledge ? (
                      <span>This is a necessary field</span>
                  ) : null}
                    <div>
                        <p>Do you know design?</p>
                    </div>
                  
                </label>
                <input
                  autoComplete="off"
                  onChange={handleKnowledgeInputChange}
                  value={values.knowledge}
                  type="text"
                  name="name"
                  placeholder="No. I am a noob"
                />
              </div>

              <div className = 'form-data'>
                <label htmlFor = 'room'>
                 {submitted && !values.room ? (
                    <span>Please select at least one</span>
                  ) :  null}
                <div>
                    <p >
                      What room would you like designed?
                    </p>
                </div>
                 
                </label>
                <input
                  autoComplete="off"
                  onChange={handleRoomInputChange}
                  value={values.room}
                  type="text"
                  name="room"
                  className = 'rooms'
                  placeholder="Living room, bathroom,..."
                />
              </div>

              <div className = 'form-data'>
                <label htmlFor = 'date'>
                   {submitted && !values.date ? (
                    <span>Please state your deadline</span>
                  ) : null}
                    <div>
                      <p >What is your deadline? </p>
                    </div>
                 
                 
                </label>
                <input
                  autoComplete="off"
                  onChange={handleDateInputChange}
                  value={values.date}
                  type="date"
                  name="date"
                  // placeholder="Minimalist style..."
                />
              </div>

              <div className = 'form-data'>
                <label htmlFor = 'price'>
                  {submitted && !values.price ? (
                    <span>Please enter a price</span>
                  ) : null}
                <div>
                    <p >
                        What is your budget?
                    </p> 
                </div>                
                </label>
                <input
                  autoComplete="off"
                  onChange={handlePriceInputChange}
                  value={values.price}
                  type="text"
                  name="price"
                  placeholder="price"
                />
              </div> 
              <div className = 'data'>
                <button onClick = {Register} type="submit">
                  Proceed!
                </button>
              </div>
            </form>
          </div>
        </>
  );
};

export default FormData;
