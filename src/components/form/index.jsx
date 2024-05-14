import React, { memo } from "react";

const Form = () => {
  return (
    <section className="admin">
      <div className="container admin__container">
        <div className="admin__top">
          <p className="admin__top-text">
            Home / <span>My Account</span>
          </p>
          <p className="admin__top-text">
            Welcome! <span>Md Rimel</span>
          </p>
        </div>

        <div className="admin__bottom">
          <div className="admin__left">
            <div className="admin__left-item">
              <h3 className="admin__left__title">Manage My Account</h3>
              <ul className="admin__left__list">
                <li>
                  <a className="admin__left__link" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="admin__left__link" href="#">
                    Address Book
                  </a>
                </li>
                <li>
                  <a className="admin__left__link" href="#">
                    My Payment Options
                  </a>
                </li>
              </ul>
            </div>
            <div className="admin__left-item">
              <h3 className="admin__left__title">My Orders</h3>
              <ul className="admin__left__list">
                <li>
                  <a className="admin__left__link" href="#">
                    My Returns
                  </a>
                </li>
                <li>
                  <a className="admin__left__link" href="#">
                    My Cancellations
                  </a>
                </li>
              </ul>
            </div>
            <div className="admin__left-item">
              <h3 className="admin__left__title">My WishList</h3>
            </div>
            <div className="admin__left-item">
              <button className="admin__logout__btn">Log Out</button>
            </div>
          </div>

          <div className="admin__right">
            <h2 className="admin__right__title">Edit Your Profile</h2>
            <form action="" className="admin__form">
              <div className="admin__form__top">
                <div className="admin__form__input-group">
                  <label for="fname">First Name</label>
                  <input id="fname" type="text" placeholder="Md" />
                </div>
                <div className="admin__form__input-group">
                  <label for="lname">Last Name</label>
                  <input id="lname" type="text" placeholder="Last Name" />
                </div>
                <div className="admin__form__input-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="rimel1111@gmail.com"
                  />
                </div>
                <div className="admin__form__input-group">
                  <label for="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
              </div>
              <div className="admin__form__bottom">
                <label for="">Password Changes</label>
                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm New Password" />
              </div>
              <div className="admin__form__btns">
                <button className="admin__form__cancel-btn">Cancel</button>
                <button className="admin__form__save__btn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Form);
