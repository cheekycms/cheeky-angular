'format cjs';
module.exports = Object.create(null);
module.exports['cheeky-ribbon.html'] = '<nav id="cms-ribbon" class="navbar navbar-default navbar-fixed-top navbar-inverse">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#cms-ribbon-collapse" aria-expanded="false">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <span class="navbar-brand"><div class="cheeky">Cheeky</div>CMS</span>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class="collapse navbar-collapse" id="cms-ribbon-collapse">\n            <form class="navbar-form navbar-left ng-pristine ng-valid ng-submitted">\n                <div class="form-group">\n                    <button class="btn btn-default cms-button-bold" title="Bold">B</button>\n                    <button class="btn btn-default cms-button-italics" title="Italicize">I</button>\n                    <button class="btn btn-default cms-button-underline" title="Underline">U</button>\n                    <select class="cms-select-block form-control" title="Type">\n                        <option value="H1">H1</option>\n                        <option value="H2">H2</option>\n                        <option value="H3">H3</option>\n                        <option value="H4">H4</option>\n                        <option value="Paragraph">Paragraph</option>\n                    </select>\n                    <button class="btn btn-default cms-button-ol" title="Numbered List"><span class="cux-icon-list_1"></span></button>\n                    <button class="btn btn-default cms-button-ul" title="Bulleted List"><span class="cux-icon-list_1"></span></button>\n                    <button class="btn btn-default cms-button-link" title="Link"><span class="cux-icon-link"></span></button>\n                    <button class="btn btn-default cms-button-image" title="Image"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span></button>\n                </div>\n            </form>\n            <form class="navbar-form navbar-right ng-pristine ng-valid">\n                <button type="button" class="btn btn-default navbar-btn" id="cms-cancel">Cancel <span class="cux-icon-close"></span></button>\n                <button type="button" class="btn btn-primary navbar-btn" id="cms-save">Save <span class="cux-icon-save"></span></button>\n            </form>\n        </div>\n    </div>\n</nav>';
