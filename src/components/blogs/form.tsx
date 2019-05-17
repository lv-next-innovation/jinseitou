import * as React from "react";

const Form = (props: any) => (
  <div className="blog__form">
    <p className="blog__form__title">フォーム</p>
    <form>
      <label htmlFor="blog__form__content">内容</label>
      <br />
      <input
        type="text"
        name="blog__form__content"
        placeholder="入力してください"
        className="blog__form__field"
      />
      <input
        type="submit"
        className="blog__form__button"
        value="送信" 
      />
    </form>
  </div>
);

export default Form;
