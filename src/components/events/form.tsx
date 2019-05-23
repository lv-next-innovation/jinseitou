import axios from "axios";
import * as React from "react";

const sendEvent = (params: any, formReset: any) => {
  axios
    .post("/api/v1/events", {
      events: {
        event_date: params.event_date,
        title: params.title,
        user_id: 1
      }
    })
    .then(res => {
      console.log(res.data);
      formReset();
    });
};

const Form = (props: any) => (
  <div className="event__form">
    <h3>出来事</h3>

    <div>
      <label htmlFor="event__form__content">いつ？</label>
      <input
        type="text"
        value={props.eventsForm.event_date}
        placeholder="1994-07-31"
        className="event__form__field"
        onChange={e => props.changeEventDate(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="event__form__content">何があった？</label>
      <input
        type="text"
        value={props.eventsForm.title}
        placeholder="初恋があった"
        className="event__form__field"
        onChange={e => props.changeTitle(e.target.value)}
      />
    </div>

    <button
      onClick={() => sendEvent(props.eventsForm, props.formReset)}
      className="event__form__button"
    >
      Submit
    </button>
  </div>
);

export default Form;
