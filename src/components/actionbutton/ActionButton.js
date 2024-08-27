import React from 'react'
import "./ActionButton.css"
const ActionButton = () => {




    return (

        <>
            <div className="actionButton anim-circle">
                <a href="https://wa.me/send?phone=919408386083&text=hello%20there%20how%20are%20you%20doing👍" target='_blank'>
                    <button type="button" class="btn btn-success btn-lg ">
                        <i class="ri-whatsapp-line"></i>
                    </button>
                </a>
            </div>





            {/* <div class="dropup position-absolute bottom-0 end-0 rounded-circle m-5">
  <button type="button" class="btn btn-success btn-lg dropdown-toggle hide-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
    <i class="fa-solid fa-plus"></i>
    <span class="visually-hidden">Add Category</span>
  </button>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#">...</a>
    </li>
  </ul>
</div> */}




        </>
    )
}

export default ActionButton
