import React from "react";
import MainContent from "../main-content/main-content.component";

const MainContentUsers = () => {
  return (
    <div className="content-users">
      <MainContent title="User">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-toggle="tab"
                    href="#Users">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#addUser">
                    Add User
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-0">
                <div className="tab-pane show active" id="Users">
                  <div className="table-responsive">
                    <table className="table table-hover table-custom spacing8">
                      <thead>
                        <tr>
                          <th className="w60">Name</th>
                          <th />
                          <th />
                          <th>Created Date</th>
                          <th>Role</th>
                          <th className="w100">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="width45">
                            <div
                              className="avtar-pic w35 bg-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar Name">
                              <span>MN</span>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">Marshall Nichols</h6>
                            <span>marshall-n@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-danger">
                              Super Admin
                            </span>
                          </td>
                          <td>24 Jun, 2015</td>
                          <td>CEO and Founder</td>
                          <td></td>
                        </tr>
                        
                        
                        
                        <tr>
                          <td>
                            <div
                              className="avtar-pic w35 bg-blue"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar Name">
                              <span>MN</span>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">Ava Alexander</h6>
                            <span>alexander@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-success">
                              HR Admin
                            </span>
                          </td>
                          <td>21 July, 2015</td>
                          <td>HR</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-default"
                              title="Edit">
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-default js-sweetalert"
                              title="Delete"
                              data-type="confirm">
                              <i className="fa fa-trash-o text-danger" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="addUser">
                  <div className="body mt-2">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email ID *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile No"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Employee ID *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <select className="form-control show-tick">
                            <option>Select Role Type</option>
                            <option>Super Admin</option>
                            <option>Admin</option>
                            <option>Employee</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <h6>Module Permission</h6>
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th />
                                <th>Read</th>
                                <th>Write</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Super Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Employee</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>HR Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span />
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span />
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <button type="button" className="btn btn-primary">
                          Add
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal">
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
};
export default MainContentUsers;
