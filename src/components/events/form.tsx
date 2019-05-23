import axios from "axios";
import * as React from "react";

const sendEvent = (params: any) => {
  axios
    .post("/api/v1/events", {
      events: {
        title: params,
        event_date: "2019-05-23",
        user_id: 1
      }
    })
    .then(res => {
      console.log(res.data);
    });
};

const Form = (props: any) => (
  <div className="event__form">
    <h3>出来事</h3>

    <div>
      {console.log(props)}
      <label htmlFor="event__form__content">いつ？</label>
      <input
        type="text"
        name="events[when]"
        placeholder="高校生の時"
        className="event__form__field"
        onChange={e => props.changeText(e.target.value)}
      />
      <label htmlFor="event__form__content">いつ？</label>
    </div>

    <div>
      <label htmlFor="event__form__content">何があった？</label>
      <input
        type="text"
        name="events[title]"
        placeholder="初恋があった"
        className="event__form__field"
      />
    </div>

    <button onClick={() => sendEvent(props.eventsForm.inputValue)} className="event__form__button">
      Submit
    </button>
  </div>
);

export default Form;
