import{_ as a,a as n,b as t}from"./add_viewelement-Hhs1SEjp.js";import{_ as s,c as i,b as o,o as l}from"./app-DsPd-_GC.js";const r={};function p(c,e){return l(),i("div",null,e[0]||(e[0]=[o('<h1 id="gettingstarted" tabindex="-1"><a class="header-anchor" href="#gettingstarted"><span>GettingStarted</span></a></h1><p>Here are the steps required to get the ViewSystem up and running:</p><h3 id="create-viewcontroller" tabindex="-1"><a class="header-anchor" href="#create-viewcontroller"><span>Create ViewController</span></a></h3><p>In the Scene which you wish to add UI, create a new GameObject and attach ViewControll Component, then drag ViewSystemData to component.</p><img src="'+a+'" width="600"><h3 id="create-ugui-canvas-with-editor" tabindex="-1"><a class="header-anchor" href="#create-ugui-canvas-with-editor"><span>Create UGUI Canvas with Editor</span></a></h3><p>Navigate to Menu Bar : MacacaGames &gt; ViewSystem &gt; Visual Editor</p><p>Click <code>GlobalSetting</code> button on toolbar.</p><ul><li>Click the <code>Generate default UI Root Object</code> button to automatically generate your first UI root. All ViewPages and ViewElements generated at runtime will be placed under this object.</li><li>Remember click <code>Save</code> button on toolbar after all step is done</li></ul><img src="'+n+'" width="600"><p>ViewSystem will create and save data under Assets/ViewSystemResources folder.</p><h3 id="make-a-viewelement" tabindex="-1"><a class="header-anchor" href="#make-a-viewelement"><span>Make a ViewElement</span></a></h3><p>Create a UI object (<code>Image</code>, <code>Button</code>, <code>Dropdown</code>, etc.) and attach the <code>ViewElement</code> component to it.</p><p>Make it into a prefab so we can use it later.</p><h3 id="make-a-viewpage" tabindex="-1"><a class="header-anchor" href="#make-a-viewpage"><span>Make a ViewPage</span></a></h3><p>Right click on empty space &gt; Add FullPage</p><p>Add the <code>ViewElement</code> you just created to <code>ViewPageItems</code>.</p><p><img src="'+t+`" alt="add_viewelement"></p><h3 id="preview-viewpage" tabindex="-1"><a class="header-anchor" href="#preview-viewpage"><span>Preview ViewPage</span></a></h3><p>Turn on <code>Edit Mode</code> in the upper left corner. This will create a temporary scene, allowing users to preview changes in the ViewPage in real-time.</p><p>(Turn off or click save button before enter play mode, since Preview ViewPage only work properly under edit mode)</p><h3 id="position-a-viewelement-on-viewpage" tabindex="-1"><a class="header-anchor" href="#position-a-viewelement-on-viewpage"><span>Position a ViewElement on ViewPage</span></a></h3><p>There are 2 different ways to define the RectTransform of a ViewElement on a ViewPage: RectTransform or CustomParent.</p><ul><li>RectTransform</li></ul><p>Define RectTransform of a ViewElement just like modifing the RectTransform Component in Inspector window. When you&#39;re previewing a ViewPage, all modify on the RectTransform information will automatically update to the previewing Screen.</p><ul><li>Custom Parent (deprecated)</li></ul><p>In Custom Parent mode the system will find the Transform object which you define and set to that Object&#39;s child.</p><p>This mode is deprecated, we only recommend using this mode in special situation such as you would like to put a ViewElement as another ViewElement&#39;s child in the runtime.</p><h3 id="show-page" tabindex="-1"><a class="header-anchor" href="#show-page"><span>Show page</span></a></h3><p>Add following script to your project, and attach it to a GameObject in the scene.</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameStart</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// show a viewPage on Awake</span></span>
<span class="line">    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Awake</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//replace this with your ViewPage name </span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">string</span></span> yourPageName <span class="token operator">=</span> <span class="token string">&quot;TestPage&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        ViewController</span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">FullPageChanger</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">SetPage</span><span class="token punctuation">(</span>yourPageName<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-and-test" tabindex="-1"><a class="header-anchor" href="#run-and-test"><span>Run and Test</span></a></h3><p>Run Unity and check your first page. You can track the currently displayed page in the ViewSystem Visual Editor.</p><blockquote><p>Make sure to open the ViewSystem Visual Editor <strong>before</strong> running your game, or it won’t display correctly.</p></blockquote>`,34)]))}const m=s(r,[["render",p],["__file","GettingStarted.html.vue"]]),h=JSON.parse('{"path":"/GettingStarted.html","title":"GettingStarted","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Create ViewController","slug":"create-viewcontroller","link":"#create-viewcontroller","children":[]},{"level":3,"title":"Create UGUI Canvas with Editor","slug":"create-ugui-canvas-with-editor","link":"#create-ugui-canvas-with-editor","children":[]},{"level":3,"title":"Make a ViewElement","slug":"make-a-viewelement","link":"#make-a-viewelement","children":[]},{"level":3,"title":"Make a ViewPage","slug":"make-a-viewpage","link":"#make-a-viewpage","children":[]},{"level":3,"title":"Preview ViewPage","slug":"preview-viewpage","link":"#preview-viewpage","children":[]},{"level":3,"title":"Position a ViewElement on ViewPage","slug":"position-a-viewelement-on-viewpage","link":"#position-a-viewelement-on-viewpage","children":[]},{"level":3,"title":"Show page","slug":"show-page","link":"#show-page","children":[]},{"level":3,"title":"Run and Test","slug":"run-and-test","link":"#run-and-test","children":[]}],"git":{"updatedTime":1727430962000,"contributors":[{"name":"oldman","email":"oldman@macaca.onmicrosoft.com","commits":2}]},"filePathRelative":"GettingStarted.md"}');export{m as comp,h as data};
