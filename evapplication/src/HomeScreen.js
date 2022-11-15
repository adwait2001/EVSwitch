
export default function HomeScreen(){
  return(
    <div>
        <div className="">
            <div className="row py-lg-5 m-0">
                <div className="col-md-6">
                    <h1 className="fw-bold">Nous vous aidons à évaluer les performances
                        entre le véhicule électrique et le
                        véhicule non électrique</h1><br/>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p><br/>
                    <p className="para">
                        <button className="btn btn-primary">Get Recommendations</button>
                    </p>
                </div>
                <div className="col-md-6">
                    <img className="m-5" src="./03.png" alt="" />
                </div>
            </div>
        </div>
        <div class="py-5 bg-success partners">
            <h2 class="text-center text-white mb-5">Our Partners</h2>
            <div class="container">
                <div class="row">
                    <div class="col-md-2 text-center">
                        <img src="./p1.jpg" alt=""/>
                    </div>
                    <div class="col-md-2 text-center">
                        <img src="./p2.jpg" alt=""/>
                    </div>
                    <div class="col-md-2 text-center">
                        <img src="./p3.jpg" alt=""/>
                    </div>
                    <div class="col-md-2 text-center">
                        <img src="./p2.jpg" alt=""/>
                    </div>
                    <div class="col-md-2 text-center">
                        <img src="./p1.jpg" alt=""/>
                    </div>
                    <div class="col-md-2 text-center">
                        <img src="./p3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5 bg-light">
            <div className="row">
                <div className="col-md-4 text-center p-5">
                    <h5 className="">Lorem ipsum amet adipiscing elit.</h5>
                    <p className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <h5 className="">Lorem ipsum amet adipiscing elit.</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <h5 className="">Lorem ipsum amet adipiscing elit.</h5>
                    <p className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        <div className="py-5 bg-white solution">
            <h2 className="text-center mb-5">The solution to protect the ecology. Exploit, analyze your vehicles
                <br/> a digital, connected and intelligent way.
            </h2>
            <div className="row bg-light m-0 p-5">
                <div className="col-md-6">
                    <img className="" src="./02.jpg" width="70%" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="">1 . Go Electric</h2>
                    <p>Choose the electric vehicle</p>
                    <ul>
                        <li>Simple</li>
                        <li>Ecological</li>
                        <li>Modern</li>
                    </ul>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-md-6">
                    <h2 className="">2 . Exploit</h2>
                    <p>Choose the electric vehicle</p>
                    <ul>
                        <li>Simple</li>
                        <li>Ecological</li>
                        <li>Modern</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <img class="" src="./02.jpg" width="70%" alt="" />
                </div>
            </div>
            <div class="row bg-light m-0 p-5">
                <div class="col-md-6">
                    <img className="" src="./02.jpg" width="70%" alt=""/>
                </div>
                <div className="col-md-6">
                    <h2 className="">3 . Analyze</h2>
                    <p>Choose the electric vehicle</p>
                    <ul>
                        <li>Simple</li>
                        <li>Ecological</li>
                        <li>Modern</li>
                    </ul>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-md-6">
                    <h2 className="">4 . Decide</h2>
                    <p>Choose the electric vehicle</p>
                    <ul>
                        <li>Simple</li>
                        <li>Ecological</li>
                        <li>Modern</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img className="" src="./02.jpg" width="70%" alt=""/>
                </div>
            </div>
        </div>

    </div>
  )
}