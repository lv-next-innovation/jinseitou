import * as React from "react";

const Form = (props: any) => (
  <div className="blog__form">
    <h3>フォーム</h3>
    <form>
      <label htmlFor="blog__form__content">内容</label>
      <br />
      <input
        type="text"
        name="blog__form__content"
        placeholder="入力してください"
      />
      <input type="submit" value="送信" />
    </form>
  </div>
);

export default Form;
