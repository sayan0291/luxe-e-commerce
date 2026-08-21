export const Footer = () => {
    return(
        <>
            <footer>
                <div className="footer-section-1">
                    <div className="md:col-span-1">
                        <span>LUXE</span>
                        <p className="mt-md font-body-md text-body-md text-on-surface-variant">Elevated essentials for the discerning modern lifestyle. Crafted with intention and integrity.</p>
                    </div>
                    <div>
                        <h5>Shop</h5>
                        <ul>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Information</h5>
                        <ul>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Shipping &amp; Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Newsletter</h5>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-md">Join the atelier for exclusive updates.</p>
                        <form className="flex border-b border-primary pb-xs">
                        <input className="bg-transparent border-none focus:ring-0 w-full font-body-md p-0" placeholder="Email Address" type="email"/>
                        <button className="font-label-md text-label-md text-primary uppercase tracking-widest ml-xs" type="submit">Join</button>
                        </form>
                    </div>
                </div>
                <div className="mt-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
                    <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">© 2024 LUXE ATELIER. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </>
    )
}