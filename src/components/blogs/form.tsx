import * as React from "react";
import axios from 'axios';

const sendBlog = () => {
  axios.post('/api/v1/blogs', {
    message: 'foo',
    user_id: 1
  }).then((res) => {
    console.log(res.data);
  })
};

const Form = (props: any) => (
  <div className="blog__form">
    <h3>フォーム</h3>
      <label htmlFor="blog__form__content">内容</label>

      <input
        type="text"
        name="blog__form__content"
        placeholder="入力してください"
      />
      <button onClick={() => }>Submit</button>
  </div>
);

export default Form;
