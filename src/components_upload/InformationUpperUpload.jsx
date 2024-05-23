import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./InformationUpperUpload.css";
import { useState } from 'react';

const InformationUpperUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const handleClick = () => {
    // 파일 선택 버튼 클릭 시 input 요소를 활성화
    document.getElementById('fileInput').click();
  };


{/* 가격, 거래 희망 장소 관련 버튼들 */}
  const [active_return, setActive_return] = useState(false);
  const [active_negotiate, setActive_negotiate] = useState(false);
  const [active_later, setActive_later] = useState(false);
  const [active_delivery, setActive_delivery] = useState(false);

  const buttonClick_return = () => {
    setActive_return(!active_return);
  }
  const buttonClick_negotiate = () => {
    setActive_negotiate(!active_negotiate);
  }
  const buttonClick_later = () => {
    setActive_later(!active_later);
  }
  const buttonClick_delivery = () => {
    setActive_delivery(!active_delivery);
  }
{/**/}

  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="parent" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <h2 className="xxx-xxx-container" onClick={handleClick} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <span className="xxx-xxx-container1">
                  {selectedImage && (
                    <div style={{maxWidth: '500px', maxHeight: '500px', objectFit: 'contain', width: '100%', height: '100%', position: 'relative' }}>
                      <img src={selectedImage} alt="Uploaded" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> 
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}} id='fileInput' />    
                </span>
              </h2>
            </div>
            <p style={{fontSize: '12px'}}>사진 등록 (위 박스 클릭) </p>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent3">
              <div className="logical-operators-wrapper">
                <div className="logical-operators">
                  <div className="logical-operators-inner">
                    <div className="frame-parent4">
                      <div className="data-aggregator-parent">
                        <div className="data-aggregator">
                          <h2 className="h2"> 제목</h2>
                          <div className="shape-array">
                            <Form className="connection-nexus">
                              <Form.Control className='colors' type="text" />
                            </Form>
                          </div>
                        </div>
                        <div className="pattern-finder">
                          <div className="image-cluster">
                            <h2 className="h21">카테고리</h2>
                            <div className="input-array">
                              <Form.Select className="dropdown-formselect, colors">
                                {/* category dict 만들어서 넣기*/}
                              </Form.Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instruction-tree">
                    <h2 className="h22">가격</h2>
                    <div className="connection-matrix">
                      <div className="event-dispatcher">
                        <Form.Control className='colors'
                        type="number" disabled={active_return}
                        placeholder="숫자만 입력하시오" />
                      </div>

                      <div className="place">
                        <div className="div17">
                          <button 
                          className={active_return ? "price-return active" : "price-return"}
                          onClick={buttonClick_return}
                          >가격 역제안 받기</button>
                        </div>
                        <div className="div17">
                          <button 
                          className= {active_negotiate ? "price-negotiate active" : "price-negotiate"}
                          onClick={buttonClick_negotiate}
                          >네고 가능</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="queue-manager">
                <div className="graph-creator">
                  <h2 className="h23">거래 희망 장소</h2>    
                </div>
                <div className="database-access">
                <Form.Control className='colors' type="text" disabled={active_later} />
                  <div className="place">
                    <div className="div17">
                      <button 
                      className={active_later ? "price-return active" : "price-return"}
                      onClick={buttonClick_later}
                      >추후 협의</button>
                    </div>
                    <div className="div17">
                      <button 
                      className={active_delivery ? "price-negotiate active" : "price-negotiate"}
                      onClick={buttonClick_delivery}>택배 거래</button>
                    </div>
                    <Form className="delivery-fee">
                      <p>배송비</p>
                      <Form.Control className='colors' 
                      type="number" disabled={!active_delivery}
                      placeholder="숫자만 입력하시오" />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationUpperUpload;
