import * as React from "react";

const Form = (props: any) => (
  <div className="ito__form">
    <h3>出来事を振り返ってみよう</h3>

    <div className="ito__form__content">
      <input
        type="text"
        value={props.itosForm.story}
        placeholder="告白した"
        className="ito__form__content__field"
        onChange={e => props.changeStory(e.target.value)}
      />
    </div>

    <h3>その出来事において深く関わった人は？</h3>

    <div className="ito__form__content">
      <input
        type="text"
        value={props.itosForm.influencer}
        placeholder="日向徹"
        className="ito__form__content__field ito__form__content__field__mb__20"
        onChange={e => props.changeInfluencer(e.target.value)}
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
