import React, { useState } from "react";
import axios from "axios";
import isImageUrl from "is-image-url";

function Form() {
  // initialization state
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");

  // posting Data to Database
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isImageUrl(url))
      axios
        .post("https://xmemenode.herokuapp.com/memes", {
          name: name,
          url: url,
          caption: caption,
        })
        .then(
          (response) => {
            alert("meme posted successfully");
          },
          (error) => {
            alert("Sorry! cannot post your meme right now");
          }
        );
    else {
      alert("Enter a Valid Image Url");  // if url is not an image url
    }
  };

  // return the form
  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 className="title has-text-weight-bold has-text-centered">
            Meme Stream
          </h1>
        </div>
        <div className="container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="field">
              <label className="lable">Meme Owner</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="lable">Caption</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Your Caption"
                  name="caption"
                  value={caption}
                  onChange={(e) => {
                    setCaption(e.target.value);
                  }}
                  required={true}
                />
              </div>
            </div>
            <label className="lable">Meme URL</label>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input is-expanded"
                  type="url"
                  placeholder="Enter URL of your meme here"
                  name="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  required={true}
                />
              </div>
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit Meme
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
