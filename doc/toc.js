// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="game-design.html"><strong aria-hidden="true">1.</strong> Game Design</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="game-design/audience.html"><strong aria-hidden="true">1.1.</strong> Target Audience</a></li><li class="chapter-item expanded "><a href="game-design/monetization.html"><strong aria-hidden="true">1.2.</strong> Monetization</a></li><li class="chapter-item expanded "><a href="game-design/art-direction.html"><strong aria-hidden="true">1.3.</strong> Art Direction</a></li><li class="chapter-item expanded "><a href="game-design/lore.html"><strong aria-hidden="true">1.4.</strong> Game Lore</a></li><li class="chapter-item expanded "><a href="game-design/game-mechanics.html"><strong aria-hidden="true">1.5.</strong> Gameplay / Mechanics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="game-design/game-mechanics/active-skills.html"><strong aria-hidden="true">1.5.1.</strong> Active Skills</a></li><li class="chapter-item expanded "><a href="game-design/game-mechanics/passive-skills.html"><strong aria-hidden="true">1.5.2.</strong> Passive Skills</a></li><li class="chapter-item expanded "><a href="game-design/game-mechanics/weapons-and-crafting.html"><strong aria-hidden="true">1.5.3.</strong> Weapons &amp; Crafting</a></li><li class="chapter-item expanded "><a href="game-design/game-mechanics/platforming.html"><strong aria-hidden="true">1.5.4.</strong> Platforming</a></li><li class="chapter-item expanded "><a href="game-design/game-mechanics/creatures-ecosystem.html"><strong aria-hidden="true">1.5.5.</strong> Creatures / Ecosystem</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="policy.html"><strong aria-hidden="true">2.</strong> Development Policies</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policy/assets.html"><strong aria-hidden="true">2.1.</strong> Assets Organization</a></li><li class="chapter-item expanded "><a href="policy/cli.html"><strong aria-hidden="true">2.2.</strong> CLI Commands</a></li></ol></li><li class="chapter-item expanded "><a href="tech.html"><strong aria-hidden="true">3.</strong> Technical Documentation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tech/cli.html"><strong aria-hidden="true">3.1.</strong> Dev Console</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tech/cli-ref.html"><strong aria-hidden="true">3.1.1.</strong> Cli Commands Reference</a></li><li class="chapter-item expanded "><a href="tech/cli-howto.html"><strong aria-hidden="true">3.1.2.</strong> How to create new CLI Commands</a></li></ol></li><li class="chapter-item expanded "><a href="tech/script.html"><strong aria-hidden="true">3.2.</strong> Scripts How-To</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tech/script-ref.html"><strong aria-hidden="true">3.2.1.</strong> Script Format Reference</a></li></ol></li><li class="chapter-item expanded "><a href="tech/anim.html"><strong aria-hidden="true">3.3.</strong> Animations How-To</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tech/anim-ref.html"><strong aria-hidden="true">3.3.1.</strong> Animation Format Reference</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
