(function() {var type_impls = {
"parry2d_f64":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericQbvh%3CLeafData,+Storage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#401-406\">source</a><a href=\"#impl-GenericQbvh%3CLeafData,+Storage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;LeafData: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>, Storage: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html\" title=\"trait parry2d_f64::partitioning::QbvhStorage\">QbvhStorage</a>&lt;LeafData&gt;&gt; <a class=\"struct\" href=\"parry2d_f64/partitioning/struct.GenericQbvh.html\" title=\"struct parry2d_f64::partitioning::GenericQbvh\">GenericQbvh</a>&lt;LeafData, Storage&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.root_aabb\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#403-405\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.root_aabb\" class=\"fn\">root_aabb</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.Aabb.html\" title=\"struct parry2d_f64::bounding_volume::Aabb\">Aabb</a></h4></section></summary><div class=\"docblock\"><p>The Aabb of the root of this tree.</p>\n</div></details></div></details>",0,"parry2d_f64::partitioning::qbvh::qbvh::Qbvh"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericQbvh%3CLeafData,+Storage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#24-438\">source</a><a href=\"#impl-GenericQbvh%3CLeafData,+Storage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;LeafData: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>, Storage: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html\" title=\"trait parry2d_f64::partitioning::QbvhStorage\">QbvhStorage</a>&lt;LeafData&gt;&gt; <a class=\"struct\" href=\"parry2d_f64/partitioning/struct.GenericQbvh.html\" title=\"struct parry2d_f64::partitioning::GenericQbvh\">GenericQbvh</a>&lt;LeafData, Storage&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_depth_first\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#30-32\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_depth_first\" class=\"fn\">traverse_depth_first</a>(\n    &amp;self,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdVisitor\">SimdVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Performs a depth-first traversal on the BVH.</p>\n<h5 id=\"return\"><a href=\"#return\">Return</a></h5>\n<p>Returns <code>false</code> if the traversal exitted early, and <code>true</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_depth_first_node\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#39-45\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_depth_first_node\" class=\"fn\">traverse_depth_first_node</a>(\n    &amp;self,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdVisitor\">SimdVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    start_node: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Performs a depth-first traversal on the BVH, starting at the given node.</p>\n<h5 id=\"return-1\"><a href=\"#return-1\">Return</a></h5>\n<p>Returns <code>false</code> if the traversal exitted early, and <code>true</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_depth_first_with_stack\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#52-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_depth_first_with_stack\" class=\"fn\">traverse_depth_first_with_stack</a>(\n    &amp;self,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdVisitor\">SimdVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    stack: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Performs a depth-first traversal on the BVH.</p>\n<h5 id=\"return-2\"><a href=\"#return-2\">Return</a></h5>\n<p>Returns <code>false</code> if the traversal exited early, and <code>true</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_depth_first_node_with_stack\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#65-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_depth_first_node_with_stack\" class=\"fn\">traverse_depth_first_node_with_stack</a>(\n    &amp;self,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdVisitor\">SimdVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    stack: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;,\n    start_node: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Performs a depth-first traversal on the BVH.</p>\n<h5 id=\"return-3\"><a href=\"#return-3\">Return</a></h5>\n<p>Returns <code>false</code> if the traversal exited early, and <code>true</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_best_first\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#116-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_best_first\" class=\"fn\">traverse_best_first</a>&lt;BFS&gt;(\n    &amp;self,\n    visitor: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut BFS</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"struct\" href=\"parry2d_f64/partitioning/struct.NodeIndex.html\" title=\"struct parry2d_f64::partitioning::NodeIndex\">NodeIndex</a>, BFS::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html#associatedtype.Result\" title=\"type parry2d_f64::partitioning::SimdBestFirstVisitor::Result\">Result</a>)&gt;<span class=\"where fmt-newline\">where\n    BFS: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdBestFirstVisitor\">SimdBestFirstVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    BFS::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html#associatedtype.Result\" title=\"type parry2d_f64::partitioning::SimdBestFirstVisitor::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section></summary><div class=\"docblock\"><p>Performs a best-first-search on the BVH.</p>\n<p>Returns the content of the leaf with the smallest associated cost, and a result of\nuser-defined type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_best_first_node\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#128-203\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_best_first_node\" class=\"fn\">traverse_best_first_node</a>&lt;BFS&gt;(\n    &amp;self,\n    visitor: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut BFS</a>,\n    start_node: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    init_cost: <a class=\"type\" href=\"parry2d_f64/math/type.Real.html\" title=\"type parry2d_f64::math::Real\">Real</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"struct\" href=\"parry2d_f64/partitioning/struct.NodeIndex.html\" title=\"struct parry2d_f64::partitioning::NodeIndex\">NodeIndex</a>, BFS::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html#associatedtype.Result\" title=\"type parry2d_f64::partitioning::SimdBestFirstVisitor::Result\">Result</a>)&gt;<span class=\"where fmt-newline\">where\n    BFS: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdBestFirstVisitor\">SimdBestFirstVisitor</a>&lt;LeafData, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    BFS::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.SimdBestFirstVisitor.html#associatedtype.Result\" title=\"type parry2d_f64::partitioning::SimdBestFirstVisitor::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section></summary><div class=\"docblock\"><p>Performs a best-first-search on the BVH, starting at the given node.</p>\n<p>Returns the content of the leaf with the smallest associated cost, and a result of\nuser-defined type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersect_aabb\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#209-241\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.intersect_aabb\" class=\"fn\">intersect_aabb</a>(&amp;self, aabb: &amp;<a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.Aabb.html\" title=\"struct parry2d_f64::bounding_volume::Aabb\">Aabb</a>, out: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;LeafData&gt;)</h4></section></summary><div class=\"docblock\"><p>Retrieve all the data of the nodes with Aabbs intersecting\nthe given Aabb:</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_bvtt\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#244-250\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_bvtt\" class=\"fn\">traverse_bvtt</a>&lt;LeafData2: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>&gt;(\n    &amp;self,\n    qbvh2: &amp;<a class=\"type\" href=\"parry2d_f64/partitioning/type.Qbvh.html\" title=\"type parry2d_f64::partitioning::Qbvh\">Qbvh</a>&lt;LeafData2&gt;,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdSimultaneousVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdSimultaneousVisitor\">SimdSimultaneousVisitor</a>&lt;LeafData, LeafData2, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Performs a simultaneous traversal of two Qbvh.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_bvtt_with_stack\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#253-337\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_bvtt_with_stack\" class=\"fn\">traverse_bvtt_with_stack</a>&lt;LeafData2: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>&gt;(\n    &amp;self,\n    qbvh2: &amp;<a class=\"type\" href=\"parry2d_f64/partitioning/type.Qbvh.html\" title=\"type parry2d_f64::partitioning::Qbvh\">Qbvh</a>&lt;LeafData2&gt;,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdSimultaneousVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdSimultaneousVisitor\">SimdSimultaneousVisitor</a>&lt;LeafData, LeafData2, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    stack: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>)&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Performs a simultaneous traversal of two Qbvh.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_modified_bvtt\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#340-346\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_modified_bvtt\" class=\"fn\">traverse_modified_bvtt</a>&lt;LeafData2: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>&gt;(\n    &amp;self,\n    qbvh2: &amp;<a class=\"type\" href=\"parry2d_f64/partitioning/type.Qbvh.html\" title=\"type parry2d_f64::partitioning::Qbvh\">Qbvh</a>&lt;LeafData2&gt;,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdSimultaneousVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdSimultaneousVisitor\">SimdSimultaneousVisitor</a>&lt;LeafData, LeafData2, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Performs a simultaneous traversal of two Qbvh.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.traverse_modified_bvtt_with_stack\" class=\"method\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/traversal.rs.html#349-437\">source</a><h4 class=\"code-header\">pub fn <a href=\"parry2d_f64/partitioning/struct.GenericQbvh.html#tymethod.traverse_modified_bvtt_with_stack\" class=\"fn\">traverse_modified_bvtt_with_stack</a>&lt;LeafData2: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.IndexedData.html\" title=\"trait parry2d_f64::partitioning::IndexedData\">IndexedData</a>&gt;(\n    &amp;self,\n    qbvh2: &amp;<a class=\"type\" href=\"parry2d_f64/partitioning/type.Qbvh.html\" title=\"type parry2d_f64::partitioning::Qbvh\">Qbvh</a>&lt;LeafData2&gt;,\n    visitor: &amp;mut impl <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.SimdSimultaneousVisitor.html\" title=\"trait parry2d_f64::partitioning::SimdSimultaneousVisitor\">SimdSimultaneousVisitor</a>&lt;LeafData, LeafData2, <a class=\"struct\" href=\"parry2d_f64/bounding_volume/struct.SimdAabb.html\" title=\"struct parry2d_f64::bounding_volume::SimdAabb\">SimdAabb</a>&gt;,\n    stack: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>)&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Performs a simultaneous traversal of two Qbvh.</p>\n</div></details></div></details>",0,"parry2d_f64::partitioning::qbvh::qbvh::Qbvh"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#259-275\">source</a><a href=\"#impl-Clone-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;LeafData, Storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"parry2d_f64/partitioning/struct.GenericQbvh.html\" title=\"struct parry2d_f64::partitioning::GenericQbvh\">GenericQbvh</a>&lt;LeafData, Storage&gt;<span class=\"where fmt-newline\">where\n    Storage: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html\" title=\"trait parry2d_f64::partitioning::QbvhStorage\">QbvhStorage</a>&lt;LeafData&gt;,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.Nodes\" title=\"type parry2d_f64::partitioning::QbvhStorage::Nodes\">Nodes</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayU32\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayU32\">ArrayU32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayProxies\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayProxies\">ArrayProxies</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#266-274\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","parry2d_f64::partitioning::qbvh::qbvh::Qbvh"],["<section id=\"impl-Copy-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#277-284\">source</a><a href=\"#impl-Copy-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;LeafData, Storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"parry2d_f64/partitioning/struct.GenericQbvh.html\" title=\"struct parry2d_f64::partitioning::GenericQbvh\">GenericQbvh</a>&lt;LeafData, Storage&gt;<span class=\"where fmt-newline\">where\n    Storage: <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html\" title=\"trait parry2d_f64::partitioning::QbvhStorage\">QbvhStorage</a>&lt;LeafData&gt;,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.Nodes\" title=\"type parry2d_f64::partitioning::QbvhStorage::Nodes\">Nodes</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayU32\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayU32\">ArrayU32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayProxies\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayProxies\">ArrayProxies</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section>","Copy","parry2d_f64::partitioning::qbvh::qbvh::Qbvh"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#239\">source</a><a href=\"#impl-Debug-for-GenericQbvh%3CLeafData,+Storage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;LeafData: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Storage: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html\" title=\"trait parry2d_f64::partitioning::QbvhStorage\">QbvhStorage</a>&lt;LeafData&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parry2d_f64/partitioning/struct.GenericQbvh.html\" title=\"struct parry2d_f64::partitioning::GenericQbvh\">GenericQbvh</a>&lt;LeafData, Storage&gt;<span class=\"where fmt-newline\">where\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.Nodes\" title=\"type parry2d_f64::partitioning::QbvhStorage::Nodes\">Nodes</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayU32\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayU32\">ArrayU32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Storage::<a class=\"associatedtype\" href=\"parry2d_f64/partitioning/trait.QbvhStorage.html#associatedtype.ArrayProxies\" title=\"type parry2d_f64::partitioning::QbvhStorage::ArrayProxies\">ArrayProxies</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parry2d_f64/partitioning/qbvh/qbvh.rs.html#239\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","parry2d_f64::partitioning::qbvh::qbvh::Qbvh"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()