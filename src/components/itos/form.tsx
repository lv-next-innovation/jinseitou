import * as React from "react";

const Form = (props: any) => (
  <div className="ito__form">
    <h3>出来事を振り返ってみよう</h3>

    <div className="ito__form__content">
      {console.log(props)}
      <input
        type="text"
        value={props.itosForm.story}
        placeholder="告白した"
        className="ito__form__content__field"
        onChange={e => props.changeStory(e.target.value)}
      />
    </div>

    <div className="ito__form__content">
      <label>どんな人？</label>
      <input
        type="text"
        value={"aaa"}
        placeholder="告白した"
        className="ito__form__content__field ito__form__content__field__mb__20"
        onChange={e => props.changeContent(e.target.value)}
      />

      <button className="ito__form__content__plus__button">+</button>
      <button
        onClick={() => props.sendIto(props.itosForm)}
        className="ito__form__content__button"
      >
        Submit
      </button>
    </div>
  </div>
);

export default Form;
