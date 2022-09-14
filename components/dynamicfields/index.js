
import React, { useState } from 'react'
// import './styles.css'
import styled, { css } from 'styled-components';
import { BiTrash, BiPlus } from "react-icons/bi";

const FieldBody = styled.div`
width:100%;
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

  .form-inline {  
    width:100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .form-inline label {
    margin: 5px 10px 5px 0;
  }

  .form-inline input {
    width:45%;
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    outline:none;
    &:focus {
        outline: none;
      }
      ::-webkit-datetime-edit-year-field:not([aria-valuenow]),
      ::-webkit-datetime-edit-month-field:not([aria-valuenow]),
      ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
          color: #ffffff;
      }
      ::-webkit-input-placeholder {
        color: rgba(0,0,0,0.2);
      }
      :-ms-input-placeholder {
        color: rgba(0,0,0,0.2);
      }
      ::placeholder {
        color: rgba(0,0,0,0.2);
      }
  }

  .button-section {
    // margin: 1%;
  }
  .button-add {
    padding: 10px 20px;
    background-color: #6200AA;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
    width:92%;
    text-align:center;
    font-size:18px;
    : hover{
        background-color:#6200EE;
    }
  }

  .button-del {
    padding: 6px;
    background-color: #ffffff;
    color: red;
    cursor: pointer;
    border-radius:4px;
    font-size:18px;
    box-shadow: 0 3px 17px 0 rgba(0, 0, 0, 0.16);
  }

  .button:hover {
    background-color: royalblue;
  }

  .remove {
    background-color:# ffffff;
  }
  .remove:hover {
    background-color: rgb(187, 43, 43);
  }



`

const DynamicFields = (props) => {
    const { handleChange, addFormFields, removeFormFields, handleSubmit, formValues } = props

    return (
        <FieldBody>
            <form onSubmit={handleSubmit}>
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <input type="text" name="label" placeholder='Enter Title Here...' autoComplete='off' value={element.label && element.label } onChange={e => handleChange(index, e)} />
                        <input type="text" name="value" length={3} maxLength={3} pattern ={"^[0-9]{0,3}$"} placeholder='Enter Percentage Here...' autoComplete='off' value={element.value && element.value } onChange={e => handleChange(index, e)} />
                        {
                            index ?
                                <div className="button-del" onClick={() => removeFormFields(index)}>
                                    <BiTrash />
                                </div>
                                : null
                        }
                    </div>
                ))}
                {
                    formValues && formValues.length < 3 &&
                    <div className="button-section">
                        <div className="button-add" onClick={() => addFormFields()}>
                            <BiPlus /> 
                            <label style={{fontSize:15,margin:"0px 5px"}}>Add New</label>
                        </div>
                        {/* <button className="button submit" type="submit">Submit</button> */}
                    </div>
                }

            </form>
        </FieldBody>

    )
}

export default DynamicFields