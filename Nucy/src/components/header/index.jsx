import React from 'react'
import "./index.css"
import logo from "../../assets/Logo.png"
import { Col, Button, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

export default function Heder() {
  return (
    <header class="product-header">
    <div className="enterprise">
    <div class="logo">
      <img src={logo}>

      </img>
      </div>
      <div className="title">

     
       <h3>Nucy</h3></div>
    </div>
    
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <button class="search-button">Search</button>
    </div>
    <Col>
        <Badge count={3} size="Large">
          <Button type="link" shape="circle" icon={<ShoppingCartOutlined style={{ fontSize: '24px',marginRight:"25px"}} />} className="cart-button" size="Large" />
        </Badge>
        <Button type="link" shape="circle" icon={<UserOutlined  style={{ fontSize: '24px'}} />} className="user-button" size="Large" />
      </Col>
  </header>
  )
}
