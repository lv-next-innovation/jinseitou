import * as React from "react";
import axios from 'axios';

const sendEvent = () => {
  axios.get('/api/v1/events', {
    message: 'foo',
    user_id: 1
  }).then((res) => {
    console.log(res.data);
  })
};

const Form = (props: any) => (
  <div className="event__form">
    <h3>フォーム</h3>
      <label htmlFor="event__form__content">内容</label>

      <input
        type="text"
        name="event__form__content"
        placeholder="入力してください"
        className="event__form__field"
      />
  
      <button onClick={() => sendEvent()} className="event__form__button">Submit</button>
  </div>
);

export default Form;
