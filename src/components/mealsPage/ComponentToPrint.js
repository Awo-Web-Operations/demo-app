import React from 'react';
import ReactToPrint from 'react-to-print';
import './componentToPrint.css'

class ComponentToPrint extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
      console.log(this)
    }

    render() {
        const { value, mealPrep, ingredientsList, categories, utensilsList } = this.props;
        let displayedCategories = ''
        displayedCategories = categories.map((cat) => cat + ', ');
        let displayedIngredients = ingredientsList.map((ingredientSyntax) => <li key={ingredientSyntax} > <h4>{ingredientSyntax} </h4></li>);
        let displayedUtensils =  utensilsList.map((utensil) => <li key={utensil} >{utensil}</li>);
        //  displayedCategories+= '</div>'
    
        console.log("categories are:")
        console.log(this.props.categories);
        console.log("displayed categories are:")
        console.log(displayedCategories);
        console.log("mealImageData");

        console.log(this.props.mealImageData);

        
        return (
            <div>
               {/* <div className="container">
                <div className="row" style={{ width: "100%" }}>
                  <div className="detail-firstCol col-md-5 col-sm-12" >
                    <img src={this.props.mealImageData} ></img>
                    Meal Image
                  </div>
                </div>
              </div>
              {displayedCategories}<br></br>
              Prep Time: {this.props.prepTime} | Cook Time: {this.props.cookTime} | Serves {this.props.serves} people<br></br>
              <img alt="Logo"></img> {this.props.mealName}<br></br>
              Ingredients:<br></br>
              <ul>{displayedIngredients}</ul><br></br>
              Utensils Needed:
              <ul>{displayedUtensils}</ul> */}

              {/* Page 2 */}
              {/* <div style={{"pageBreakBefore": "always"}}>
                <div> 
                  {this.props.instructionChunk1.title}<br></br>
                  {this.props.instructionChunk1.dataName}<br></br>
                  {this.props.instructionChunk1.instructionSteps}
                  {this.props.instructionChunk2.title}<br></br>
                  {this.props.instructionChunk2.dataName}<br></br>
                  {this.props.instructionChunk2.instructionSteps}
                </div>
                <div> 
                  {this.props.instructionChunk3.title}<br></br>
                  {this.props.instructionChunk3.dataName}<br></br>
                  {this.props.instructionChunk3.instructionSteps}
                  {this.props.instructionChunk4.title}<br></br>
                  {this.props.instructionChunk4.dataName}<br></br>
                  {this.props.instructionChunk4.instructionSteps}
                </div>
                <div> 
                  {this.props.instructionChunk5.title}<br></br>
                  {this.props.instructionChunk5.dataName}<br></br>
                  {this.props.instructionChunk5.instructionSteps}
                  {this.props.instructionChunk6.title}<br></br>
                  {this.props.instructionChunk6.dataName}<br></br>
                  {this.props.instructionChunk6.instructionSteps}
                </div>
                {this.props.tips}
                <div>Connect with us @chop_soul_full</div>
              </div> */}
                <div className="print">
                  <div className="print_page_1">
                    <div className="print_page_1_row_1">
                      <img className="print_main_logo_img" src={this.props.mealImageData} ></img>
                    </div>
                    <div className="print_page_1_row_2">
                      <div className="print_page_1_col_1">
                        <div className="print_top">
                          <h2>Meal: {this.props.mealName}</h2>
                        </div>
                        <div className="meal_details">
                          <div className="col_2">
                            <div className="meal_detail">
                              <h2>Prep Time:</h2>
                              <p>{this.props.prepTime}</p>
                            </div>
                            <div className="meal_detail">
                              <h2>Cook Time:</h2>
                              <p>{this.props.cookTime}</p>
                            </div>
                          </div>
                          <div className="col_2">
                            <div className="meal_detail">
                              <h2>Serves:</h2>
                              <p>{this.props.serves}</p>
                            </div>
                          </div>
                        </div>
                        <div className="print_details">
                          <div className="print_detail">
                            <h2>Utensils Needed</h2>
                            <ul>{displayedUtensils}</ul>
                          </div>
                        </div>
                      </div>
                      <div className="print_col_1_detail">
                        <h2>Ingredients</h2>
                        <ul>{displayedIngredients}</ul>
                      </div>
                    </div>
                  </div>
                  <div className="print_page_2">
                    <div className="print_body">
                      <div className="meal_instructions">
                      {(this.props.instructionChunk1.title || this.props.instructionChunk2.title) &&
                        <div className="meal_instruction"> 
                        {this.props.instructionChunk1.title &&
                          <div>
                            <div className="title"><h4>1</h4>{this.props.instructionChunk1.title}</div>
                            <div>{this.props.instructionChunk1.dataName}</div>
                            <div>{this.props.instructionChunk1.instructionSteps}</div>
                          </div>
                          }
                          {this.props.instructionChunk2.title &&
                          <div>
                            <div className="title"><h4>2</h4>{this.props.instructionChunk2.title}</div>
                            <div>{this.props.instructionChunk2.dataName}</div>
                            <div>{this.props.instructionChunk2.instructionSteps}</div>
                          </div>
                          }
                        </div>
                        }
                        {(this.props.instructionChunk3.title || this.props.instructionChunk4.title) &&
                        <div className="meal_instruction"> 
                        {this.props.instructionChunk3.title &&
                          <div>
                            <div className="title"><h4>3</h4>{this.props.instructionChunk3.title}</div>
                            <div>{this.props.instructionChunk3.dataName}</div>
                            <div>{this.props.instructionChunk3.instructionSteps}</div>
                          </div>
                          }
                          {this.props.instructionChunk4.title &&
                          <div>
                            <div className="title"><h4>4</h4>{this.props.instructionChunk4.title}</div>
                            <div>{this.props.instructionChunk4.dataName}</div>
                            <div>{this.props.instructionChunk4.instructionSteps}</div>
                          </div>
                          }
                        </div>
                        }
                        {(this.props.instructionChunk5.title || this.props.instructionChunk6.title) &&
                        <div className="meal_instruction">
                        {this.props.instructionChunk5.title && 
                          <div>
                            <div className="title"><h4>5</h4>{this.props.instructionChunk5.title}</div>
                            <div>{this.props.instructionChunk5.dataName}</div>
                            <div>{this.props.instructionChunk5.instructionSteps}</div>
                          </div>
                        }
                        {this.props.instructionChunk6.title &&
                          <div>
                            <div className="title"><h4>6</h4>{this.props.instructionChunk6.title}</div>
                            <div>{this.props.instructionChunk6.dataName}</div>
                            <div>{this.props.instructionChunk6.instructionSteps}</div>
                          </div>
                        }
                        </div>}
                        {this.props.tips}
                        
                      </div>
                    </div>
                    <div className='tips'>
                      <h2>Tips:</h2>
                    </div>
                      <div className='footer'>
                        <h2>Connect with us @chop_soul_full</h2>
                      </div>
                  </div>
                  
                </div>

            </div>
        );
    }
}

export default ComponentToPrint