
import React from 'react';
import data from'./data';


function App() {
  return (
    <div>
   <div class="parallax">
        <div class="page-title">Eat Fresh</div>
    </div>
    <div class="menu" id="sticky">
        <ul class="menu-ul">
            <a href="#" class="a-menu">
                <li>Home</li>
            </a>
            <a href="#deals" class="a-menu">
                <li>Deals</li>
            </a>
            <a href="#vegetables" class="a-menu">
                <li>Vegetables</li>
            </a>
            <a href="#fruits" class="a-menu">
                <li>Fruits</li>
            </a>
            <a href="#meat" class="a-menu">
                <li>Meat</li>
            </a>

        </ul>
        <div class="search-box">
            <form>
                <input type="text" placeholder="search..." name="search" class="search-input" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>
    <div class="container">
        <a href="#vegetables" >
            <div class="categories">
                <img src="images/vegetables/vegetables.jpg" class="item-image" />
                <div class="image-title">Vegetables</div>
            </div>
        </a>
        <a href="#fruits">
            <div class="categories">
                <img src="images/fruits/fruits.jpg" class="item-image"/>
                <div class="image-title">Fruits</div>
            </div>
        </a>
        <a href="#meat">
            <div class="categories">
                <img src="images/meat/meat.jpg" class="item-image"/>
                <div class="image-title">Meat</div>
            </div>
        </a>
        <a href="#deals">
            <div class="categories">
                <img src="images/deal/deal.jpg" class="item-image" />
                <div class="image-title">Deals</div>
            </div>
        </a>
    </div>
    <div class="deals-container" id="deals">
        <div class="parallax">
            <div class="title">DEALS</div>
        </div>
        <div class="deal">
            Save 20% on min-purchase of $149 on vegetables<br />
            <button cass="coupon-btn">Add coupon</button>
        </div>
        <div class="deal">
            Save 10% on min-purchase of $100 on fruits<br />
            <button cass="coupon-btn">Add coupon</button>
        </div>
        <div class="deal">
            Save 15% on min-purchase of $200 on meat<br />
            <button cass="coupon-btn">Add coupon</button>
        </div>
    </div>
    <div class="deals-container" id="vegetables">
        <div class="parallax">
            <div class="title">Vegetables</div>
        </div>
        
        <div class="items">
         
            <div class="images">
                <img src="images/vegetables/carrot.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Carrot</b><br/>
                <div class="item-select">
                    Price: Rs.40.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">
                <img src="images/vegetables/tomatoes.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>tomatoes</b><br/>
                <div class="item-select">
                    Price: Rs.30.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/vegetables/gowa mal.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Gowa Mal</b><br/>
                <div class="item-select">
                    Price: Rs.60.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/vegetables/cucumber.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Cucumber</b><br/>
                <div class="item-select">
                    Price: Rs.15.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/vegetables/onion.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Onion</b><br/>
                <div class="item-select">
                    Price: Rs.50.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/vegetables/brocoli.jpg" class="item-image-size"/>
            </div>
            
            <div class="description">
                <b>Brocoli</b><br/>
                <div class="item-select">
                    Price: Rs.100.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
    </div>
   
    <div class="deals-container" id="fruits">
        <div class="parallax">
            <div class="title">Fruits</div>
        </div>
        <div class="items">
            <div class="images">
                <img src="images/fruits/apple.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Apple</b><br/>
                <div class="item-select">
                    Price: Rs.40.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>100</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">
                <img src="images/fruits/orange.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Orange</b><br/>
                <div class="item-select">
                    Price: Rs.30.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/fruits/banana.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Banana</b><br/>
                <div class="item-select">
                    Price: Rs.60.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/fruits/mango.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Mango</b><br/>
                <div class="item-select">
                    Price: Rs.15.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/fruits/mangosteen.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Mangosteen</b><br/>
                <div class="item-select">
                    Price: Rs.50.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/fruits/pineapple.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Brocoli</b><br/>
                <div class="item-select">
                    Price: Rs.100.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
    </div>

    <div class="deals-container" id="meat">
        <div class="parallax">
            <div class="title">Meat</div>
        </div>
        <div class="items">
            <div class="images">
                <img src="images/meat/fish.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>fish</b><br/>
                <div class="item-select">
                    Price: Rs.40.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">
                <img src="images/meat/fish1.jpg" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Fish</b><br/>
                <div class="item-select">
                    Price: Rs.30.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/meat/prawns.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Prawns</b><br/>
                <div class="item-select">
                    Price: Rs.60.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/meat/meat.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Cucumber</b><br/>
                <div class="item-select">
                    Price: Rs.150.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/meat/meat.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Cucumber</b><br/>
                <div class="item-select">
                    Price: Rs.150.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
        <div class="items">
            <div class="images">

                <img src="images/meat/meat.webp" class="item-image-size"/>
            </div>
            <div class="description">
                <b>Cucumber</b><br/>
                <div class="item-select">
                    Price: Rs.150.00 / 250g
                </div>
                <label>Qty</label>
                <select class="item-select">
                    <option>250g</option>
                    <option>500g</option>
                    <option>750g</option>
                    <option>1000g</option>
                </select><br/>
                <button class="buynow-btn">Buy Now</button>
            </div>
        </div>
    </div>
    <div class="parallax">
        <div class="footer">

            <div class="quick-links">
                <div>Locations</div>
                <ul>
                    <li><a href="" class="a-links">178/6B, Kirulapana</a></li>
                    <li><a href="" class="a-links">65/A, Col-7</a></li>
                    <li><a href="" class="a-links">120/6, Nugegoda</a></li>
                </ul>
            </div>
            <div class="quick-links">
                <div>Careers</div>
                <ul>
                    <li><a href="" class="a-links">Packing Staff</a></li>
                    <li><a href="" class="a-links">Delivery Agents</a></li>
                    <li><a href="" class="a-links">Shelf Fillers</a></li>
                </ul>
            </div>
            <div class="quick-links">
                <div>Quick links</div>
                <ul>
                    <li><a href="" class="a-links">Contact Us</a></li>
                    <li><a href="" class="a-links">FAQ</a></li>
                    <li><a href="" class="a-links">Help</a></li>
                </ul>
            </div>

        </div>
    </div>
    <div class="copyrights">
        <i class="fa fa-copyright fa-lx"></i>2020 by Sachie Creations
    </div>


</div>  );
}

export default App;
