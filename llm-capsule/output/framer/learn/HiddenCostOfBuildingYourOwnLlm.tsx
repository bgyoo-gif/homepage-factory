// AUTO-GENERATED. Do not edit by hand.
// Generator: framer-dev agent
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<h2>1. Why Teams Choose to Self-Host in the First Place</h2>
<p>The decision to run an LLM on the enterprise's own infrastructure is reasonable. There are workflows where it's the right answer, environments where it's the only answer, and strategic reasons to invest in internal AI capability even when external options exist. <strong>None of this is the question.</strong></p>
<p>The question is whether the team making the decision understands what they're actually committing to. In a striking number of enterprise AI programs, the choice to run internally was made based on a model of cost that turns out to be wrong in predictable ways. The model itself — the actual weights, the open-source release the team is going to deploy — <strong>is the cheapest part of the deployment</strong>. The rest of the cost structure is where the surprises live, and most of those surprises arrive months after the commitment is too far along to reverse.</p>
<p>This article walks through the cost layers of running a serious LLM internally, what each one actually involves, and where teams consistently under-budget. <em>It's not an argument against self-hosting. It's an attempt to make the decision an informed one.</em></p>
<p>Before getting into the costs, it's worth being precise about the reasons that lead enterprises to self-host. The reasons are real and the architecture should match them.</p>
<ul>
  <li><strong>Data location constraints are absolute.</strong> Some workflows cannot send data to any external endpoint, regardless of transformation or safeguards. Defence operations, certain regulated healthcare categories, lawful intercept handling, classified financial workflows. For these, self-hosting isn't a choice — it's the only architecture that works. The cost analysis is then about <em>which</em> internal deployment, not <em>whether</em> to deploy internally.</li>
  <li><strong>Sector-specific commitments restrict the deployment topology.</strong> A telecom operator under sector-specific data location requirements may need parts of its operational AI to run inside the operator's own network even when transformation-based approaches could theoretically address the constraint. The contract or the data posture is binding regardless of architecture.</li>
  <li><strong>Strategic capability investment.</strong> Some enterprises view AI as a long-term capability they need to own, not rent. The reasoning is that AI is going to be central to the business, the vendor landscape is uncertain, and the company prefers to build internal expertise. This is a defensible position that doesn't depend on data location constraints at all.</li>
  <li><strong>Cost projection at scale.</strong> For workflows with very high request volumes, the per-token cost of external API calls eventually exceeds the fixed cost of running infrastructure. For most enterprises this point is further out than they think, but the projection is sometimes the explicit reason for self-hosting.</li>
  <li><strong>Operational predictability.</strong> External LLM vendors change models, prices, terms, and availability without the enterprise's approval. For workflows where this volatility is unacceptable, controlling the model lifecycle internally has real value.</li>
</ul>
<p>Each of these is a legitimate basis for self-hosting. <strong>The mistake isn't in the reasoning — it's in the budget assumed once the decision is made.</strong></p>

<h2>2. The Model — The Cheap Part</h2>
<p>The first surprise for teams new to this is that <strong>the model itself costs very little</strong>.</p>
<p>The leading open-source models — Llama, Mistral, Qwen, and their successors — are released under licences that allow enterprise use without per-token fees. Downloading the weights costs nothing. Quantising them to run on the available hardware costs nothing. There are no licensing negotiations, no usage-based billing, no per-seat costs for the model as such.</p>
<p>This is the visible part of the cost analysis, and it's where the optimistic projections come from. <em>"The model is free; running it ourselves must be cheaper than the API."</em> The calculation looks decisive when only the model cost is in it.</p>
<p><strong>What the calculation is missing is everything else.</strong></p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-labelledby="cost-layers-title cost-layers-desc">
      <title id="cost-layers-title">The asymmetric cost layers of self-hosted LLMs</title>
      <desc id="cost-layers-desc">A diagram showing five cost layers of self-hosted LLM deployment, stacked from smallest (model) to largest (people), with time and maintenance shown as bands that compound over the multi-year horizon.</desc>

      <defs>
        <marker id="arrow-time" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309"/>
        </marker>
      </defs>

      <text x="40" y="34" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SELF-HOSTED LLM · COST LAYERS</text>
      <text x="920" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">3-YEAR HORIZON</text>

      <text x="160" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Layer</text>
      <text x="540" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Relative cost weight</text>
      <text x="860" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Budgeted?</text>

      <g>
        <rect x="40" y="86" width="240" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="60" y="106" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Model</text>
        <text x="60" y="122" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">weights · licence · quantisation</text>
        <rect x="300" y="92" width="60" height="32" rx="4" fill="#0ea5a4"/>
        <text x="370" y="113" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Free</text>
        <text x="860" y="113" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Yes ✓</text>
      </g>

      <g>
        <rect x="40" y="140" width="240" height="60" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Infrastructure</text>
        <text x="60" y="176" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">GPU · serving stack · monitoring</text>
        <text x="60" y="190" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">storage · network · scaling</text>
        <rect x="300" y="152" width="200" height="36" rx="4" fill="#5b4fe9"/>
        <text x="510" y="175" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Medium</text>
        <text x="860" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Usually ✓</text>
      </g>

      <g>
        <rect x="40" y="210" width="240" height="100" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="2"/>
        <text x="60" y="232" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">People</text>
        <text x="60" y="248" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML platform engineers (2–4)</text>
        <text x="60" y="262" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML ops engineers (2–3)</text>
        <text x="60" y="276" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Evaluation engineers (1–2)</text>
        <text x="60" y="290" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Workflow integration (2–3 per domain)</text>
        <text x="60" y="304" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Technical leadership</text>
        <rect x="300" y="232" width="520" height="56" rx="4" fill="#ef5350"/>
        <text x="560" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#ffffff">2–3× infrastructure cost over 3 years</text>
        <text x="860" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Under-budgeted ✗</text>
      </g>

      <line x1="40" y1="332" x2="920" y2="332" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="40" y="354" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">COMPOUNDS OVER TIME</text>

      <g>
        <rect x="40" y="368" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="388" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Time</text>
        <text x="60" y="406" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">9–18 months from decision to production AI</text>
        <text x="60" y="418" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">opportunity cost on workflows that wait · external models advance during the build</text>
        <line x1="680" y1="396" x2="900" y2="396" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="388" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">opportunity cost</text>
      </g>

      <g>
        <rect x="40" y="432" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="452" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Maintenance</text>
        <text x="60" y="470" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Model updates · quality monitoring · infrastructure patches · workflow evolution</text>
        <text x="60" y="482" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">sustained team burn against a growing portfolio of workflows — doesn't appear in initial budget</text>
        <line x1="680" y1="460" x2="900" y2="460" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="452" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">never ends</text>
      </g>

      <text x="480" y="510" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">The model is the visible part. The cost lives in the layers below.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Figure 1 · <strong>The model is the cheapest layer. People consistently dominate the multi-year cost. Time and maintenance compound — and don't appear in the initial budget.</strong></figcaption>
</figure>

<h2>3. Infrastructure — The Layer Most Teams Budget For</h2>
<p>The next layer of cost is infrastructure, and <strong>this is the layer most teams do budget for, often realistically</strong>.</p>
<p>Running a serious open-source model in production means GPUs. The exact specification depends on the model size, the quantisation level, the throughput required, and the latency targets. A small deployment running a quantised mid-size model for low-throughput internal workflows might fit on a few enterprise GPUs at modest cost. A serious deployment running a larger model for high-throughput production workflows needs a dedicated GPU cluster with the cooling, power, and networking that implies.</p>
<p>The GPU cost can be calculated. A team that's done the work knows what they need and what it costs, whether that's hardware capex or cloud reserved instances or some combination. <strong>The capex side gets reasonable budget attention.</strong></p>
<p>What's often less well-budgeted at this layer is the supporting infrastructure that makes the GPUs useful: the model serving stack (<code>vLLM</code>, <code>TGI</code>, or equivalent), the request routing and load balancing in front of the serving layer, the storage for model weights and caches, the network capacity to handle the request volume, the monitoring infrastructure that watches all of it. These aren't expensive individually but they add up, and they require deliberate planning. The serving stack in particular has matured significantly in recent years; <em>it's no longer a research artefact, but it's still infrastructure that the team has to deploy and operate</em>.</p>
<p>Beyond the initial deployment, the infrastructure has to scale with usage. A workflow that grows from a hundred requests per day to ten thousand requests per day needs proportionally more capacity. This is the routine cost of running production systems, but it's worth factoring into the multi-year projection rather than assuming the day-one budget covers the long term.</p>

<h2>4. People — The Layer Most Teams Underestimate</h2>
<p>The layer where the projections most consistently break down is people. <strong>Running a production LLM is not a thing the existing infrastructure team does on the side.</strong> It requires a dedicated team with specific skills, and those skills are expensive in the current market.</p>
<p>A minimal team for serious internal LLM deployment includes:</p>
<ul>
  <li><strong>ML platform engineers</strong> who understand model serving, quantisation, throughput optimisation, and the operational characteristics of the inference stack. <em>Two to four engineers</em>, depending on scale.</li>
  <li><strong>ML operations engineers</strong> who handle the monitoring, alerting, capacity planning, and on-call rotation for the inference infrastructure. <em>Two to three engineers</em>, often overlapping with the platform engineers in smaller teams.</li>
  <li><strong>Evaluation engineers</strong> who maintain the golden datasets, the evaluation pipelines, the quality monitoring, and the regression testing for model updates. <em>One to two engineers</em>, with significant input from the workflow teams that use the model.</li>
  <li><strong>Workflow integration engineers</strong> who build and maintain the layer between the model API and the actual workflows in the business. The number scales with the number of workflows; <em>typically two to three engineers per major workflow domain</em>.</li>
  <li><strong>Technical leadership</strong> with enough ML and infrastructure experience to make the architectural decisions and review the work. <em>One senior engineer at minimum</em>, often a small leadership group for larger deployments.</li>
</ul>
<p>For an enterprise running internal LLMs for a few business units, this is <strong>six to ten people</strong>. For a larger deployment serving multiple business units across a complex enterprise, it's <strong>fifteen to twenty</strong>.</p>
<p>The cost of these teams, in any major market, is substantial. ML engineers with the right skills earn well above the general engineering market. <strong>The team is small in headcount but expensive in burn rate.</strong> Over a three-year horizon, the people cost typically exceeds the infrastructure cost by a meaningful margin — for many deployments, <em>by a factor of two or three</em>.</p>
<p>This is the calculation that most often shifts when the team that proposed the project doesn't initially own the people cost. The infrastructure budget gets sponsored; the team has to be hired; and when the team is hired, the rest of the program has to fund it.</p>

<h2>5. Time — The Cost That Compounds</h2>
<p>A category that's harder to put a number on but easy to underestimate: time. Specifically, <strong>the gap between deciding to self-host and having a useful workflow in production</strong>.</p>
<p>The decision is fast. The procurement of hardware or cloud commitment takes weeks. The initial deployment of the serving stack and a first model takes more weeks. Getting the first workflow integrated and useful takes months. Achieving the operational maturity to run multiple workflows reliably takes longer still.</p>
<p>For most enterprises, the realistic timeline from <em>"we'll build our own"</em> to <em>"we're running production AI on it"</em> is somewhere between <strong>nine and eighteen months</strong>. Some teams move faster; many move slower. During this window, the enterprise either has no AI in the workflows the project is meant to serve, or it has AI through external endpoints that the project was meant to replace.</p>
<p>This matters for two reasons. The first is the <strong>opportunity cost</strong>: the workflows that would have been improved by AI aren't improved during the build period, and the business value of that delay is real. The second is the <strong>strategic risk</strong>: during the same window, the external LLM landscape continues to advance, and the internal model that finally goes into production may already be two iterations behind what the external alternative offers.</p>
<p>A common pattern: <em>the internal model arrives at production quality just in time for the team to discover that the workflow it was supposed to support has been re-architected around external endpoints in the interim.</em> <strong>The project succeeds technically and fails strategically.</strong></p>

<h2>6. Maintenance — The Cost That Doesn't End</h2>
<p>Once the system is running, the costs don't stop. <strong>They shift to a different category.</strong></p>
<ul>
  <li><strong>Model updates.</strong> Every few months, new open-source models get released with meaningfully better capabilities. The team has to evaluate each release, decide whether to upgrade, plan the migration, run the parallel evaluation, and execute the cutover. For a single model, this is a recurring engineering project — not enormous, but <em>ongoing</em>. For multiple models supporting different workflows, it's a significant portion of the team's time.</li>
  <li><strong>Evaluation and quality monitoring.</strong> The model that worked well last quarter may not work as well on this quarter's input distribution. Workflows evolve, documents change, business contexts shift. The evaluation infrastructure has to catch quality drift <em>before</em> users complain. This is sustained engineering work, not something the team can set up once and forget.</li>
  <li><strong>Infrastructure updates.</strong> The serving stack gets updates; the underlying GPU drivers change; security patches arrive; the cloud platforms deprecate things. None of this is dramatic, but it requires the team to stay current and apply changes without breaking the production workflows.</li>
  <li><strong>Workflow evolution.</strong> As the business changes, the workflows the model supports change. New prompts have to be developed, evaluated, and rolled out. Old prompts have to be deprecated. Workflow integrations have to be updated. <em>The team that built the system is the team that maintains the workflows it serves</em>, which is more work than the initial build implied.</li>
</ul>
<p>The maintenance cost is the cost that's hardest to project because <strong>it doesn't appear in the initial budget</strong>. It shows up over the multi-year horizon as the team's sustained burn against a growing portfolio of workflows. <em>Enterprises that succeed with self-hosted AI tend to be the ones that planned for the maintenance investment from the start; enterprises that struggle are usually the ones that treated the initial deployment as the cost.</em></p>

<h2>7. Where Self-Hosting Is the Right Answer</h2>
<p>Given all this, the cases where self-hosting is the clearly right answer are specific.</p>
<ul>
  <li><strong>When data location constraints are absolute.</strong> Workflows that cannot send data to any external endpoint must run internally. The cost is the cost of meeting the constraint, and the alternative is not having AI in the workflow at all.</li>
  <li><strong>When the workflow volume justifies the fixed cost.</strong> Very high request volumes — <em>millions of requests per day at sustained scale</em> — amortise the infrastructure and people costs across enough work to come out ahead of per-token billing. The break-even point is further out than most enterprises think, but for some workflows it's clearly inside the planning horizon.</li>
  <li><strong>When the strategic case is explicit and funded.</strong> Building internal AI capability as a long-term investment is defensible. <em>The decision should be made with full visibility into the multi-year cost</em>, not as a side effect of <em>"we'll save on API fees."</em></li>
</ul>

<h2>8. Where Self-Hosting Is the Wrong Answer</h2>
<p>The cases where self-hosting is the wrong answer are also specific.</p>
<ul>
  <li><strong>When the data location constraint can be addressed by transformation.</strong> For workflows where the data can stay in the EU region through architectural means — encapsulation, tokenisation, customer-controlled mapping — <em>the external endpoint with appropriate safeguards is a faster, cheaper, more capable solution</em>. The cost analysis usually doesn't favour self-hosting for these workflows.</li>
  <li><strong>When the workflow needs frontier capability.</strong> The internal model lags the frontier external model on the dimensions that matter most for complex reasoning, long context handling, and unfamiliar document types. Some workflows can live with the gap; some can't. <em>Self-hosting for the workflows that can't produces a system that works but underperforms.</em></li>
  <li><strong>When the cost projection didn't include the full team.</strong> A self-hosting program funded only for infrastructure ends up either limping along understaffed or quietly absorbing the budget that was meant for other work. <em>Either way, the actual cost catches up with the optimistic projection.</em></li>
</ul>

<h2>9. The Pattern Most Enterprises End Up With</h2>
<p>Across enterprises that have worked through this, the deployment that emerges usually isn't pure self-hosting. <strong>It's a hybrid</strong> where the self-hosted infrastructure handles the workflows that genuinely require it — the absolute-constraint cases, the strategic-investment cases, the volume cases where the math works out — and external endpoints with transformation handle the rest.</p>
<p>The hybrid pattern isn't a compromise. <strong>It's the architecture that matches the cost profile of each workflow category to its actual constraint.</strong> Workflows that need self-hosting get self-hosting. Workflows that don't get external endpoints with safeguards. The team operates one routing layer, one governance framework, and two backends — <em>at a substantially lower total cost than running one backend that has to handle everything</em>.</p>
<p>For the broader argument about why hybrid is the architecturally honest answer rather than a political compromise, see the pillar on where to run enterprise AI. For the routing layer that makes hybrid actually work, see the article on routing AI workflows between cloud and local models. For the workflows at the strictest end of the self-hosting case — where no external endpoint is acceptable — see the article on when AI must run without network access.</p>

<div class="takeaways">
  <div class="takeaways__label">Key Takeaways</div>
  <ul>
    <li>The model itself is free — the surprises live in every other layer of the cost structure</li>
    <li>Infrastructure (GPU + serving stack + monitoring) is real but typically budgeted reasonably</li>
    <li>People are the layer that most consistently breaks the projection — 6–10 engineers minimum, 15–20 for larger deployments, exceeding infrastructure cost by 2–3× over three years</li>
    <li>Time compounds as opportunity cost — 9–18 months from decision to production AI, during which the workflows wait and the external frontier advances</li>
    <li>Maintenance doesn't end — model updates, quality drift, infrastructure patches, workflow evolution accumulate as sustained team burn</li>
    <li>Right when: constraints are absolute · volume justifies the fixed cost · the strategic case is explicit and funded</li>
    <li>Wrong when: transformation could address the constraint · the workflow needs frontier capability · the projection didn't include the full team</li>
    <li>The pattern most enterprises end up with is hybrid — self-hosted for the workflows that need it, external endpoints with transformation for the rest, under one routing layer and one governance framework</li>
  </ul>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Isn't self-hosted AI cheaper than paying per-token for external APIs?</h3>
<p>Only when the calculation includes everything, not just the model. The model itself is free — Llama, Mistral, Qwen, and their successors are released under enterprise-friendly licences with no per-token fees. Where the calculation usually breaks is everything else: GPU infrastructure (budgeted reasonably), the team to operate it (underbudgeted), the time between deciding and being in production (compounds as opportunity cost), and ongoing maintenance (doesn't end). Over a three-year horizon, the people cost typically exceeds the infrastructure cost by a factor of two or three. <strong>The break-even point versus API billing is further out than most enterprises think.</strong></p>

<h3>How big does the team need to be to run a serious internal LLM?</h3>
<p>For a few business units, <strong>six to ten people</strong>. For a larger deployment serving multiple business units across a complex enterprise, <strong>fifteen to twenty</strong>. The composition is ML platform engineers (2–4), ML operations engineers (2–3), evaluation engineers (1–2), workflow integration engineers (2–3 per major workflow domain), and technical leadership (at minimum one senior engineer). These are small headcounts but expensive burn rates — ML engineers with the right skills earn well above the general engineering market. <em>The team cost is what most projections under-budget.</em></p>

<h3>When is self-hosting actually the right answer?</h3>
<p>Three specific cases. First, when <strong>data location constraints are absolute</strong> — workflows that cannot send data to any external endpoint regardless of safeguards must run internally; the cost is the cost of meeting the constraint. Second, when <strong>workflow volume justifies the fixed cost</strong> — sustained millions of requests per day amortise infrastructure and team costs across enough work to come out ahead of per-token billing. Third, when <strong>the strategic case is explicit and funded</strong> — building internal AI capability as a long-term investment, with full visibility into the multi-year cost rather than as a side effect of <em>"we'll save on API fees."</em></p>

<h3>When is self-hosting the wrong answer?</h3>
<p>Three specific cases. When <strong>the data location constraint can be addressed by transformation</strong> — for workflows where data can stay in the EU region through encapsulation, tokenisation, and customer-controlled mapping, the external endpoint with appropriate safeguards is faster, cheaper, and more capable. When <strong>the workflow needs frontier capability</strong> — internal models lag the frontier on complex reasoning, long context, and unfamiliar document types; self-hosting workflows that can't tolerate this gap produces systems that work but underperform. When <strong>the cost projection didn't include the full team</strong> — programs funded only for infrastructure end up understaffed or quietly absorbing budgets meant for other work.</p>

<h3>What's the realistic timeline from deciding to self-host to running production AI?</h3>
<p><strong>Nine to eighteen months</strong> for most enterprises. Procurement takes weeks, initial serving-stack deployment takes more weeks, getting the first workflow integrated and useful takes months, and operational maturity to run multiple workflows reliably takes longer still. During this window the enterprise has no AI in the workflows the project is meant to serve, or it has AI through the external endpoints the project was meant to replace. <em>The opportunity cost is real</em>, and during the same window the external LLM landscape continues to advance — the internal model that finally goes into production may already be behind.</p>

<h3>Does the cost stop once the system is running?</h3>
<p>No — it shifts categories. <strong>Model updates</strong> (new open-source releases every few months requiring evaluation, migration, parallel evaluation, cutover). <strong>Quality monitoring</strong> (workflows evolve, input distributions shift, evaluation infrastructure has to catch drift). <strong>Infrastructure updates</strong> (serving stack updates, GPU driver changes, security patches, cloud deprecations). <strong>Workflow evolution</strong> (new prompts to develop, old prompts to deprecate, integrations to update). This is the cost hardest to project because it doesn't appear in the initial budget — <em>it shows up over multi-year horizons as the team's sustained burn against a growing workflow portfolio</em>.</p>

<h3>What pattern do most enterprises end up with?</h3>
<p>Hybrid — not as a political compromise but as the architecture that matches each workflow category's cost profile to its actual constraint. Self-hosted infrastructure handles workflows that genuinely require it (absolute-constraint cases, strategic-investment cases, volume cases where the math works out). External endpoints with transformation handle the rest. <strong>The team operates one routing layer, one governance framework, and two backends</strong> — at substantially lower total cost than running one backend that has to handle everything.</p>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Isn't self-hosted AI cheaper than paying per-token for external APIs?","acceptedAnswer":{"@type":"Answer","text":"Only when the calculation includes everything, not just the model. The model itself is free — Llama, Mistral, Qwen, and their successors are released under enterprise-friendly licences with no per-token fees. Where the calculation usually breaks is everything else: GPU infrastructure (budgeted reasonably), the team to operate it (underbudgeted), the time between deciding and being in production (compounds as opportunity cost), and ongoing maintenance (doesn't end). Over a three-year horizon, the people cost typically exceeds the infrastructure cost by a factor of two or three. The break-even point versus API billing is further out than most enterprises think."}}, {"@type":"Question","name":"How big does the team need to be to run a serious internal LLM?","acceptedAnswer":{"@type":"Answer","text":"For a few business units, six to ten people. For a larger deployment serving multiple business units across a complex enterprise, fifteen to twenty. The composition is ML platform engineers (2–4), ML operations engineers (2–3), evaluation engineers (1–2), workflow integration engineers (2–3 per major workflow domain), and technical leadership (at minimum one senior engineer). These are small headcounts but expensive burn rates — ML engineers with the right skills earn well above the general engineering market. The team cost is what most projections under-budget."}}, {"@type":"Question","name":"When is self-hosting actually the right answer?","acceptedAnswer":{"@type":"Answer","text":"Three specific cases. First, when data location constraints are absolute — workflows that cannot send data to any external endpoint regardless of safeguards must run internally; the cost is the cost of meeting the constraint. Second, when workflow volume justifies the fixed cost — sustained millions of requests per day amortise infrastructure and team costs across enough work to come out ahead of per-token billing. Third, when the strategic case is explicit and funded — building internal AI capability as a long-term investment, with full visibility into the multi-year cost rather than as a side effect of 'we'll save on API fees.'"}}, {"@type":"Question","name":"When is self-hosting the wrong answer?","acceptedAnswer":{"@type":"Answer","text":"Three specific cases. When the data location constraint can be addressed by transformation — for workflows where data can stay in the EU region through encapsulation, tokenisation, and customer-controlled mapping, the external endpoint with appropriate safeguards is faster, cheaper, and more capable. When the workflow needs frontier capability — internal models lag the frontier on complex reasoning, long context, and unfamiliar document types; self-hosting workflows that can't tolerate this gap produces systems that work but underperform. When the cost projection didn't include the full team — programs funded only for infrastructure end up understaffed or quietly absorbing budgets meant for other work."}}, {"@type":"Question","name":"What's the realistic timeline from deciding to self-host to running production AI?","acceptedAnswer":{"@type":"Answer","text":"Nine to eighteen months for most enterprises. Procurement takes weeks, initial serving-stack deployment takes more weeks, getting the first workflow integrated and useful takes months, and operational maturity to run multiple workflows reliably takes longer still. During this window the enterprise has no AI in the workflows the project is meant to serve, or it has AI through the external endpoints the project was meant to replace. The opportunity cost is real, and during the same window the external LLM landscape continues to advance — the internal model that finally goes into production may already be behind."}}, {"@type":"Question","name":"Does the cost stop once the system is running?","acceptedAnswer":{"@type":"Answer","text":"No — it shifts categories. Model updates (new open-source releases every few months requiring evaluation, migration, parallel evaluation, cutover). Quality monitoring (workflows evolve, input distributions shift, evaluation infrastructure has to catch drift). Infrastructure updates (serving stack updates, GPU driver changes, security patches, cloud deprecations). Workflow evolution (new prompts to develop, old prompts to deprecate, integrations to update). This is the cost hardest to project because it doesn't appear in the initial budget — it shows up over multi-year horizons as the team's sustained burn against a growing workflow portfolio."}}, {"@type":"Question","name":"What pattern do most enterprises end up with?","acceptedAnswer":{"@type":"Answer","text":"Hybrid — not as a political compromise but as the architecture that matches each workflow category's cost profile to its actual constraint. Self-hosted infrastructure handles workflows that genuinely require it (absolute-constraint cases, strategic-investment cases, volume cases where the math works out). External endpoints with transformation handle the rest. The team operates one routing layer, one governance framework, and two backends — at substantially lower total cost than running one backend that has to handle everything."}} ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "The Hidden Cost of Building Your Own Enterprise LLM",
    lead: "Running your own LLM in production is a defensible choice — but the cost structure is asymmetric. The model is the cheap part. A realistic look at what self-hosted AI actually costs, where teams under-budget, and when it's the right answer.",
    category: "AI Architecture",
    readTime: "~10 min read",
    dateUpdated: "May 2026",
    tldrLabel: "TL;DR",
    tldrBody: "Self-hosting an LLM is a defensible choice — but the cost structure is asymmetric and most projections miss it. The model itself is free. Infrastructure is real and usually budgeted. People are the layer that most consistently breaks the projection — six to ten engineers minimum, fifteen to twenty for larger deployments, in a market where ML talent earns well above general engineering rates. Over a three-year horizon the people cost typically exceeds infrastructure by two or three times. Time compounds as opportunity cost: nine to eighteen months from decision to running production AI, during which the workflows the project was meant to serve either go without AI or use the external endpoints the project was meant to replace. Maintenance doesn't end — model updates, quality monitoring, infrastructure patches, workflow evolution accumulate as sustained team burn. Self-hosting is right when constraints are absolute, volume justifies the fixed cost, or the strategic case is explicit and funded. It's wrong when transformation could address the constraint, when workflows need frontier capability, or when the projection didn't include the full team. The pattern most enterprises end up with is hybrid: self-hosted for workflows that need it, external endpoints with transformation for the rest, under one routing layer and one governance framework.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hidden-cost-of-building-your-own-llm",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "en-GB",
    breadcrumbLabel: "The Hidden Cost of Building Your Own Enterprise LLM",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Where to Read Next",
    related1Title: "Where to Run Enterprise AI: External, On-Premise, or Both",
    related1Href: "/resources/learn/where-to-run-enterprise-ai",
    related2Title: "Routing AI Workflows Between Cloud and Local Models",
    related2Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related3Title: "When AI Must Run Without Network Access",
    related3Href: "/resources/learn/when-ai-must-run-without-network-access",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "자체 엔터프라이즈 LLM 구축의 숨겨진 비용",
    lead: "프로덕션에서 자체 LLM을 운영하는 것은 합리적인 선택일 수 있습니다. 그러나 비용 구조는 비대칭적입니다. 모델은 가장 저렴한 부분입니다. 자체 호스팅 AI의 실제 비용이 얼마인지, 팀들이 어디서 예산을 과소 책정하는지, 그리고 언제 올바른 답인지를 현실적으로 살펴봅니다.",
    category: "AI Architecture",
    readTime: "~10분 읽기",
    dateUpdated: "2026년 5월",
    tldrLabel: "TL;DR",
    tldrBody: "LLM 자체 호스팅은 합리적인 선택일 수 있습니다. 그러나 비용 구조는 비대칭적이며 대부분의 예측이 이를 놓칩니다. 모델 자체는 무료입니다. 인프라 비용은 실재하며 보통 예산에 반영됩니다. 인력이 예측을 가장 일관되게 무너뜨리는 레이어입니다. 최소 6~10명의 엔지니어, 대규모 배포에서는 15~20명이 필요하며, ML 인재가 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받는 현재 시장에서 그 비용은 상당합니다. 3년 기간으로 보면 인력 비용은 보통 인프라 비용의 2~3배를 초과합니다. 시간은 기회 비용으로 복리로 쌓입니다. 의사결정에서 프로덕션 AI 가동까지 9~18개월이 걸리며, 그 사이 프로젝트가 담당하기로 한 워크플로우는 AI 없이 운영되거나, 대체하려 했던 외부 엔드포인트를 계속 사용합니다. 유지보수는 끝나지 않습니다. 대부분의 기업이 결국 도달하는 패턴은 hybrid입니다.",
    bodyHtml: `<h2>1. 팀들이 처음부터 자체 호스팅을 선택하는 이유</h2>
<p>기업 자체 인프라에서 LLM을 운영하겠다는 결정은 합리적입니다. 그것이 올바른 답인 워크플로우가 있고, 유일한 답인 환경이 있으며, 외부 옵션이 존재하더라도 내부 AI 역량에 투자할 전략적 이유가 있습니다. <strong>이것 자체가 문제는 아닙니다.</strong></p>
<p>문제는 결정을 내리는 팀이 자신들이 실제로 무엇을 약속하는지 이해하고 있는가입니다. 놀랍도록 많은 엔터프라이즈 AI 프로그램에서, 내부 운영을 선택한 결정이 예측 가능한 방식으로 틀린 것으로 밝혀지는 비용 모델에 근거해 이루어집니다. 모델 자체 — 실제 가중치, 팀이 배포하려는 오픈소스 릴리스 — 는 <strong>배포에서 가장 저렴한 부분</strong>입니다. 나머지 비용 구조에 놀라움이 도사리고 있으며, 대부분의 놀라움은 약속이 돌이키기 어려울 만큼 진행된 몇 달 후에 찾아옵니다.</p>
<p>이 아티클은 내부에서 진지한 LLM을 운영할 때의 비용 레이어, 각각이 실제로 무엇을 수반하는지, 그리고 팀들이 일관되게 예산을 과소 책정하는 부분을 짚어봅니다. <em>자체 호스팅에 반대하는 주장이 아닙니다. 결정을 충분한 정보를 갖고 내릴 수 있도록 돕기 위한 시도입니다.</em></p>
<p>비용으로 들어가기 전에, 기업들이 자체 호스팅으로 이끌리는 이유를 정확히 짚어볼 필요가 있습니다. 이유는 실재하며 아키텍처는 그에 부합해야 합니다.</p>
<ul>
  <li><strong>데이터 위치 제약이 절대적입니다.</strong> 일부 워크플로우는 변환이나 안전장치에 관계없이 어떤 외부 엔드포인트로도 데이터를 보낼 수 없습니다. 방위 작전, 특정 규제 의료 카테고리, 합법적 감청 처리, 기밀 금융 워크플로우가 여기에 해당합니다. 이러한 경우 자체 호스팅은 선택이 아닙니다 — 작동하는 유일한 아키텍처입니다. 비용 분석은 내부 배포를 할지 말지가 아니라 <em>어떤</em> 내부 배포를 할지의 문제가 됩니다.</li>
  <li><strong>섹터별 약정이 배포 토폴로지를 제한합니다.</strong> 섹터별 데이터 위치 요건 하의 통신 사업자는 변환 기반 접근법이 이론적으로 제약을 해결할 수 있더라도 운영 AI의 일부를 자체 네트워크 내에서 실행해야 할 수 있습니다. 계약 또는 데이터 자세는 아키텍처에 관계없이 구속력이 있습니다.</li>
  <li><strong>전략적 역량 투자.</strong> 일부 기업은 AI를 임대가 아닌 소유해야 할 장기적 역량으로 봅니다. AI가 비즈니스의 핵심이 될 것이고, 벤더 지형이 불확실하며, 회사가 내부 전문성을 구축하는 것을 선호한다는 논리입니다. 이는 데이터 위치 제약에 전혀 의존하지 않는 합리적인 입장입니다.</li>
  <li><strong>규모에서의 비용 예측.</strong> 요청량이 매우 높은 워크플로우에서 외부 API 호출의 토큰당 비용은 결국 인프라 운영의 고정 비용을 초과합니다. 대부분의 기업에게 이 시점은 그들이 생각하는 것보다 더 멀리 있지만, 자체 호스팅의 명시적 이유가 되는 경우도 있습니다.</li>
  <li><strong>운영 예측 가능성.</strong> 외부 LLM 벤더는 기업의 승인 없이 모델, 가격, 조건, 가용성을 변경합니다. 이러한 변동성이 허용되지 않는 워크플로우에서 모델 라이프사이클을 내부에서 통제하는 것은 실질적인 가치를 가집니다.</li>
</ul>
<p>이 각각은 자체 호스팅의 정당한 근거입니다. <strong>실수는 논리에 있지 않습니다 — 결정이 내려진 후 가정한 예산에 있습니다.</strong></p>

<h2>2. 모델 — 저렴한 부분</h2>
<p>이 분야를 처음 접하는 팀들이 첫 번째로 놀라는 것은 <strong>모델 자체는 비용이 거의 들지 않는다</strong>는 점입니다.</p>
<p>주요 오픈소스 모델들 — Llama, Mistral, Qwen, 그리고 그 후속 모델들 — 은 토큰당 수수료 없이 엔터프라이즈 사용을 허용하는 라이선스 하에 출시됩니다. 가중치를 다운로드하는 것은 무료입니다. 가용 하드웨어에서 실행하기 위해 양자화하는 것도 무료입니다. 라이선스 협상도, 사용량 기반 청구도, 모델 자체에 대한 사용자당 비용도 없습니다.</p>
<p>이것이 비용 분석에서 눈에 보이는 부분이며, 낙관적 예측이 나오는 지점입니다. <em>"모델은 무료입니다. 우리가 직접 운영하는 것이 API보다 저렴할 것입니다."</em> 비용 계산에 모델 비용만 들어있을 때 결론은 결정적으로 보입니다.</p>
<p><strong>계산에서 빠진 것은 나머지 모든 것입니다.</strong></p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-labelledby="cost-layers-title cost-layers-desc">
      <title id="cost-layers-title">The asymmetric cost layers of self-hosted LLMs</title>
      <desc id="cost-layers-desc">A diagram showing five cost layers of self-hosted LLM deployment, stacked from smallest (model) to largest (people), with time and maintenance shown as bands that compound over the multi-year horizon.</desc>
      <defs>
        <marker id="arrow-time" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309"/>
        </marker>
      </defs>
      <text x="40" y="34" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SELF-HOSTED LLM · COST LAYERS</text>
      <text x="920" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">3-YEAR HORIZON</text>
      <text x="160" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Layer</text>
      <text x="540" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Relative cost weight</text>
      <text x="860" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Budgeted?</text>
      <g>
        <rect x="40" y="86" width="240" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="60" y="106" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Model</text>
        <text x="60" y="122" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">weights · licence · quantisation</text>
        <rect x="300" y="92" width="60" height="32" rx="4" fill="#0ea5a4"/>
        <text x="370" y="113" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Free</text>
        <text x="860" y="113" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Yes ✓</text>
      </g>
      <g>
        <rect x="40" y="140" width="240" height="60" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Infrastructure</text>
        <text x="60" y="176" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">GPU · serving stack · monitoring</text>
        <text x="60" y="190" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">storage · network · scaling</text>
        <rect x="300" y="152" width="200" height="36" rx="4" fill="#5b4fe9"/>
        <text x="510" y="175" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Medium</text>
        <text x="860" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Usually ✓</text>
      </g>
      <g>
        <rect x="40" y="210" width="240" height="100" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="2"/>
        <text x="60" y="232" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">People</text>
        <text x="60" y="248" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML platform engineers (2–4)</text>
        <text x="60" y="262" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML ops engineers (2–3)</text>
        <text x="60" y="276" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Evaluation engineers (1–2)</text>
        <text x="60" y="290" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Workflow integration (2–3 per domain)</text>
        <text x="60" y="304" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Technical leadership</text>
        <rect x="300" y="232" width="520" height="56" rx="4" fill="#ef5350"/>
        <text x="560" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#ffffff">2–3× infrastructure cost over 3 years</text>
        <text x="860" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Under-budgeted ✗</text>
      </g>
      <line x1="40" y1="332" x2="920" y2="332" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="40" y="354" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">COMPOUNDS OVER TIME</text>
      <g>
        <rect x="40" y="368" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="388" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Time</text>
        <text x="60" y="406" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">9–18 months from decision to production AI</text>
        <text x="60" y="418" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">opportunity cost on workflows that wait · external models advance during the build</text>
        <line x1="680" y1="396" x2="900" y2="396" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="388" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">opportunity cost</text>
      </g>
      <g>
        <rect x="40" y="432" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="452" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Maintenance</text>
        <text x="60" y="470" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Model updates · quality monitoring · infrastructure patches · workflow evolution</text>
        <text x="60" y="482" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">sustained team burn against a growing portfolio of workflows — doesn't appear in initial budget</text>
        <line x1="680" y1="460" x2="900" y2="460" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="452" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">never ends</text>
      </g>
      <text x="480" y="510" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">The model is the visible part. The cost lives in the layers below.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 · <strong>모델은 가장 저렴한 레이어입니다. 인력이 3년 기간의 비용을 일관되게 지배합니다. 시간과 유지보수는 복리로 쌓이며 — 초기 예산에 나타나지 않습니다.</strong></figcaption>
</figure>

<h2>3. 인프라 — 대부분의 팀이 예산을 책정하는 레이어</h2>
<p>다음 비용 레이어는 인프라이며, <strong>이것은 대부분의 팀이 실제로 예산을 책정하는 레이어입니다. 보통 현실적으로 책정합니다.</strong></p>
<p>프로덕션에서 진지한 오픈소스 모델을 운영한다는 것은 GPU를 의미합니다. 정확한 사양은 모델 크기, 양자화 수준, 필요한 처리량, 레이턴시 목표에 따라 달라집니다. 저처리량 내부 워크플로우를 위해 양자화된 중간 크기 모델을 운영하는 소규모 배포는 적당한 비용으로 몇 개의 엔터프라이즈 GPU에서 실행될 수 있습니다. 고처리량 프로덕션 워크플로우를 위해 더 큰 모델을 운영하는 진지한 배포는 냉각, 전원, 네트워킹이 수반되는 전용 GPU 클러스터가 필요합니다.</p>
<p>GPU 비용은 계산 가능합니다. 준비를 마친 팀은 무엇이 필요하고 비용이 얼마인지 알고 있습니다. 하드웨어 자본지출이든, 클라우드 예약 인스턴스든, 그 조합이든 마찬가지입니다. <strong>자본지출 측면은 합리적인 예산 관심을 받습니다.</strong></p>
<p>이 레이어에서 종종 덜 잘 예산이 책정되는 것은 GPU를 유용하게 만드는 지원 인프라입니다. 모델 서빙 스택(<code>vLLM</code>, <code>TGI</code> 또는 동등한 것), 서빙 레이어 앞의 요청 라우팅과 로드 밸런싱, 모델 가중치와 캐시를 위한 스토리지, 요청량을 처리할 네트워크 용량, 이 모든 것을 모니터링하는 모니터링 인프라입니다. 개별적으로는 비싸지 않지만 합산되며, 신중한 계획이 필요합니다. 서빙 스택은 특히 최근 몇 년간 크게 성숙했습니다. <em>더 이상 연구 산물이 아니지만, 팀이 배포하고 운영해야 하는 인프라임에는 변함이 없습니다.</em></p>
<p>초기 배포 이후, 인프라는 사용량에 따라 확장되어야 합니다. 하루 백 건의 요청에서 만 건으로 증가하는 워크플로우는 비례적으로 더 많은 용량이 필요합니다. 이것은 프로덕션 시스템 운영의 일상적인 비용이지만, 초기 예산이 장기를 커버한다고 가정하기보다 3년 예측에 반영할 가치가 있습니다.</p>

<h2>4. 인력 — 대부분의 팀이 과소 평가하는 레이어</h2>
<p>예측이 가장 일관되게 무너지는 레이어는 인력입니다. <strong>프로덕션 LLM 운영은 기존 인프라 팀이 부업으로 하는 일이 아닙니다.</strong> 특정 기술을 갖춘 전담 팀이 필요하며, 현재 시장에서 그 기술은 비쌉니다.</p>
<p>진지한 내부 LLM 배포를 위한 최소 팀 구성은 다음을 포함합니다.</p>
<ul>
  <li><strong>ML 플랫폼 엔지니어</strong> — 모델 서빙, 양자화, 처리량 최적화, 추론 스택의 운영 특성을 이해하는 엔지니어. 규모에 따라 <em>2~4명</em>.</li>
  <li><strong>ML 운영 엔지니어</strong> — 추론 인프라의 모니터링, 알림, 용량 계획, 온콜 로테이션을 담당하는 엔지니어. <em>2~3명</em>, 소규모 팀에서는 플랫폼 엔지니어와 역할이 겹치는 경우가 많습니다.</li>
  <li><strong>평가 엔지니어</strong> — 골든 데이터셋, 평가 파이프라인, 품질 모니터링, 모델 업데이트에 대한 회귀 테스트를 유지하는 엔지니어. <em>1~2명</em>, 모델을 사용하는 워크플로우 팀으로부터 상당한 인풋을 받습니다.</li>
  <li><strong>워크플로우 통합 엔지니어</strong> — 모델 API와 비즈니스의 실제 워크플로우 사이의 레이어를 구축하고 유지하는 엔지니어. 워크플로우 수에 따라 규모가 달라집니다. <em>보통 주요 워크플로우 도메인당 2~3명.</em></li>
  <li><strong>기술 리더십</strong> — 아키텍처 결정을 내리고 작업을 검토할 충분한 ML 및 인프라 경험을 갖춘 인력. <em>최소 시니어 엔지니어 1명</em>, 대규모 배포에서는 소규모 리더십 그룹인 경우가 많습니다.</li>
</ul>
<p>몇 개의 사업부를 위해 내부 LLM을 운영하는 기업의 경우 <strong>6~10명</strong>입니다. 복잡한 엔터프라이즈 전반에 걸쳐 여러 사업부를 서비스하는 더 큰 배포의 경우 <strong>15~20명</strong>입니다.</p>
<p>주요 시장 어디에서든 이 팀들의 비용은 상당합니다. 적합한 기술을 갖춘 ML 엔지니어는 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받습니다. <strong>팀은 인원수로는 소규모이지만 소진 비율은 높습니다.</strong> 3년 기간으로 보면, 인력 비용은 인프라 비용을 의미 있는 차이로 초과하는 경우가 많습니다 — 많은 배포에서 <em>2~3배 정도입니다.</em></p>
<p>이것이 프로젝트를 제안한 팀이 처음에 인력 비용을 직접 부담하지 않을 때 가장 자주 바뀌는 계산입니다. 인프라 예산은 승인되고, 팀은 채용되어야 하며, 팀이 채용되면 나머지 프로그램이 그것을 지원해야 합니다.</p>

<h2>5. 시간 — 복리로 쌓이는 비용</h2>
<p>수치로 나타내기는 더 어렵지만 과소 평가하기 쉬운 카테고리가 있습니다. 시간입니다. 구체적으로, <strong>자체 호스팅을 결정하는 것과 유용한 워크플로우를 프로덕션에서 가동하는 것 사이의 간격</strong>입니다.</p>
<p>결정은 빠릅니다. 하드웨어 조달 또는 클라우드 약정은 몇 주가 걸립니다. 서빙 스택과 첫 모델의 초기 배포는 더 많은 주가 걸립니다. 첫 번째 워크플로우를 통합하고 유용하게 만드는 데는 몇 달이 걸립니다. 여러 워크플로우를 안정적으로 운영할 수 있는 운영 성숙도를 달성하는 데는 더 오래 걸립니다.</p>
<p>대부분의 기업에게 <em>"자체 구축하겠습니다"</em>에서 <em>"우리가 그것으로 프로덕션 AI를 운영하고 있습니다"</em>까지의 현실적인 일정은 <strong>9~18개월</strong> 어딘가입니다. 더 빨리 움직이는 팀도 있고 더 느린 팀도 많습니다. 이 기간 동안, 기업은 프로젝트가 서비스하기로 한 워크플로우에서 AI가 없거나, 프로젝트가 대체하려 했던 외부 엔드포인트를 통해 AI를 사용합니다.</p>
<p>이것이 두 가지 이유로 중요합니다. 첫 번째는 <strong>기회 비용</strong>입니다. AI로 개선될 수 있었던 워크플로우가 구축 기간 동안 개선되지 않으며, 그 지연의 비즈니스 가치는 실재합니다. 두 번째는 <strong>전략적 위험</strong>입니다. 같은 기간 동안 외부 LLM 지형은 계속 발전하며, 마침내 프로덕션에 투입되는 내부 모델은 이미 외부 대안이 제공하는 것보다 두 세대 뒤처져 있을 수 있습니다.</p>
<p>흔한 패턴이 있습니다. <em>내부 모델이 프로덕션 품질에 도달한 바로 그 시점에, 그것이 지원하기로 한 워크플로우가 그 사이 외부 엔드포인트를 중심으로 재설계되었음을 팀이 발견합니다.</em> <strong>프로젝트는 기술적으로 성공하고 전략적으로 실패합니다.</strong></p>

<h2>6. 유지보수 — 끝나지 않는 비용</h2>
<p>시스템이 가동되면 비용은 멈추지 않습니다. <strong>다른 카테고리로 이동할 뿐입니다.</strong></p>
<ul>
  <li><strong>모델 업데이트.</strong> 몇 달마다 의미 있게 더 나은 역량을 가진 새로운 오픈소스 모델이 출시됩니다. 팀은 각 릴리스를 평가하고, 업그레이드 여부를 결정하고, 마이그레이션을 계획하고, 병렬 평가를 실행하고, 전환을 실행해야 합니다. 단일 모델의 경우 이것은 반복적인 엔지니어링 프로젝트입니다 — 엄청나지는 않지만 <em>지속적입니다.</em> 서로 다른 워크플로우를 지원하는 여러 모델의 경우 팀 시간의 상당 부분을 차지합니다.</li>
  <li><strong>평가 및 품질 모니터링.</strong> 지난 분기에 잘 작동했던 모델이 이번 분기의 입력 분포에서는 잘 작동하지 않을 수 있습니다. 워크플로우가 진화하고, 문서가 변하고, 비즈니스 컨텍스트가 바뀝니다. 평가 인프라는 사용자가 불평하기 <em>전에</em> 품질 저하를 감지해야 합니다. 이것은 지속적인 엔지니어링 작업이며, 한 번 설정하고 잊어버릴 수 있는 것이 아닙니다.</li>
  <li><strong>인프라 업데이트.</strong> 서빙 스택이 업데이트되고, 기반 GPU 드라이버가 변경되고, 보안 패치가 도착하고, 클라우드 플랫폼이 기능을 폐기합니다. 극적인 것은 없지만 팀이 최신 상태를 유지하고 프로덕션 워크플로우를 망가뜨리지 않으면서 변경을 적용해야 합니다.</li>
  <li><strong>워크플로우 진화.</strong> 비즈니스가 변화함에 따라 모델이 지원하는 워크플로우도 변합니다. 새로운 프롬프트를 개발하고, 평가하고, 배포해야 합니다. 기존 프롬프트를 폐기해야 합니다. 워크플로우 통합을 업데이트해야 합니다. <em>시스템을 구축한 팀이 그것이 서비스하는 워크플로우를 유지하는 팀입니다.</em> 초기 구축이 암시한 것보다 더 많은 작업입니다.</li>
</ul>
<p>유지보수 비용은 예측하기 가장 어려운 비용입니다. <strong>초기 예산에 나타나지 않기 때문입니다.</strong> 증가하는 워크플로우 포트폴리오에 대한 팀의 지속적인 소진으로 3년 기간에 걸쳐 나타납니다. <em>자체 호스팅 AI에서 성공하는 기업은 처음부터 유지보수 투자를 계획한 곳인 경향이 있고, 어려움을 겪는 기업은 초기 배포를 비용으로 취급한 곳인 경향이 있습니다.</em></p>

<h2>7. 자체 호스팅이 올바른 답인 경우</h2>
<p>이 모든 것을 감안할 때, 자체 호스팅이 명확히 올바른 답인 경우는 구체적입니다.</p>
<ul>
  <li><strong>데이터 위치 제약이 절대적인 경우.</strong> 어떤 외부 엔드포인트로도 데이터를 보낼 수 없는 워크플로우는 내부에서 실행되어야 합니다. 비용은 제약을 충족하는 비용이며, 대안은 워크플로우에서 AI를 전혀 갖지 않는 것입니다.</li>
  <li><strong>워크플로우 요청량이 고정 비용을 정당화하는 경우.</strong> 매우 높은 요청량 — <em>지속적인 규모에서 하루 수백만 건의 요청</em> — 은 인프라와 인력 비용을 충분한 작업량에 걸쳐 분산시켜 토큰당 청구보다 유리하게 만듭니다. 손익분기점은 대부분의 기업이 생각하는 것보다 더 멀리 있지만, 일부 워크플로우에서는 계획 기간 내에 명확히 들어옵니다.</li>
  <li><strong>전략적 근거가 명확하고 자금이 확보된 경우.</strong> 내부 AI 역량을 장기 투자로 구축하는 것은 합리적입니다. <em>결정은 3년 비용에 대한 완전한 가시성을 가지고 내려져야 합니다.</em> <em>"API 비용을 절약하겠습니다"</em>의 부산물이 아니라.</li>
</ul>

<h2>8. 자체 호스팅이 잘못된 답인 경우</h2>
<p>자체 호스팅이 잘못된 답인 경우도 구체적입니다.</p>
<ul>
  <li><strong>데이터 위치 제약을 변환으로 해결할 수 있는 경우.</strong> 아키텍처 수단 — 캡슐화, 토큰화, 고객 제어 매핑 — 을 통해 데이터가 EU 지역에 머물 수 있는 워크플로우에서 <em>적절한 안전장치를 갖춘 외부 엔드포인트가 더 빠르고, 저렴하고, 더 역량 있는 솔루션입니다.</em> 비용 분석은 보통 이러한 워크플로우에서 자체 호스팅에 유리하지 않습니다.</li>
  <li><strong>워크플로우가 frontier 역량을 필요로 하는 경우.</strong> 내부 모델은 복잡한 추론, 긴 컨텍스트 처리, 익숙하지 않은 문서 유형에서 가장 중요한 차원에서 외부 frontier 모델에 뒤처집니다. 일부 워크플로우는 격차와 함께 살 수 있지만 일부는 그렇지 않습니다. <em>격차를 허용할 수 없는 워크플로우에 자체 호스팅하면 작동하지만 성능이 저하된 시스템이 만들어집니다.</em></li>
  <li><strong>비용 예측에 전체 팀이 포함되지 않은 경우.</strong> 인프라에 대해서만 자금이 지원된 자체 호스팅 프로그램은 인력 부족으로 힘들게 진행되거나, 다른 작업을 위한 예산을 조용히 흡수하게 됩니다. <em>어느 쪽이든 실제 비용은 낙관적 예측을 따라잡습니다.</em></li>
</ul>

<h2>9. 대부분의 기업이 결국 도달하는 패턴</h2>
<p>이 과정을 겪어온 기업들에서, 나타나는 배포는 보통 순수한 자체 호스팅이 아닙니다. <strong>hybrid입니다.</strong> 자체 호스팅 인프라가 진정으로 필요한 워크플로우 — 절대 제약 사례, 전략 투자 사례, 수학이 맞는 요청량 사례 — 를 처리하고, 변환을 갖춘 외부 엔드포인트가 나머지를 처리합니다.</p>
<p>hybrid 패턴은 타협이 아닙니다. <strong>각 워크플로우 카테고리의 비용 프로파일을 실제 제약에 맞추는 아키텍처입니다.</strong> 자체 호스팅이 필요한 워크플로우는 자체 호스팅을 받습니다. 그렇지 않은 워크플로우는 안전장치를 갖춘 외부 엔드포인트를 받습니다. 팀은 하나의 라우팅 레이어, 하나의 거버넌스 프레임워크, 두 개의 백엔드를 운영합니다 — <em>모든 것을 처리해야 하는 하나의 백엔드를 운영하는 것보다 실질적으로 낮은 총 비용으로.</em></p>
<p>hybrid가 정치적 타협이 아닌 아키텍처적으로 정직한 답인 이유에 대한 더 넓은 논의는 엔터프라이즈 AI를 어디서 실행할 것인가에 관한 글을 참조하십시오. hybrid를 실제로 작동하게 만드는 라우팅 레이어에 대해서는 클라우드와 로컬 모델 사이에서 AI 워크플로우를 라우팅하는 아티클을 참조하십시오. 자체 호스팅 사례의 가장 엄격한 끝단 — 외부 엔드포인트가 허용되지 않는 — 에 있는 워크플로우에 대해서는 AI가 네트워크 접근 없이 실행되어야 할 때에 관한 아티클을 참조하십시오.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 요약</div>
  <ul>
    <li>모델 자체는 무료입니다 — 놀라움은 비용 구조의 다른 모든 레이어에 있습니다</li>
    <li>인프라(GPU + 서빙 스택 + 모니터링)는 실재하지만 보통 합리적으로 예산이 책정됩니다</li>
    <li>인력이 예측을 가장 일관되게 무너뜨리는 레이어입니다 — 최소 6~10명의 엔지니어, 대규모 배포에서는 15~20명, 3년 기간에 걸쳐 인프라 비용의 2~3배를 초과합니다</li>
    <li>시간은 기회 비용으로 복리로 쌓입니다 — 의사결정에서 프로덕션 AI 가동까지 9~18개월, 그 사이 워크플로우는 기다리고 외부 frontier는 전진합니다</li>
    <li>유지보수는 끝나지 않습니다 — 모델 업데이트, 품질 저하, 인프라 패치, 워크플로우 진화가 지속적인 팀 소진으로 누적됩니다</li>
    <li>올바른 경우: 제약이 절대적 · 요청량이 고정 비용을 정당화 · 전략적 근거가 명확하고 자금이 확보된 경우</li>
    <li>잘못된 경우: 변환으로 제약을 해결할 수 있는 경우 · 워크플로우가 frontier 역량을 필요로 하는 경우 · 예측에 전체 팀이 포함되지 않은 경우</li>
    <li>대부분의 기업이 결국 도달하는 패턴은 hybrid입니다 — 필요한 워크플로우에는 자체 호스팅, 나머지에는 변환을 갖춘 외부 엔드포인트, 하나의 라우팅 레이어와 하나의 거버넌스 프레임워크 하에</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>자체 호스팅 AI가 외부 API의 토큰당 비용을 지불하는 것보다 저렴하지 않습니까?</h3>
<p>모델뿐만 아니라 모든 것을 포함한 계산일 때만 그렇습니다. 모델 자체는 무료입니다 — Llama, Mistral, Qwen, 그리고 그 후속 모델들은 토큰당 수수료 없이 엔터프라이즈 친화적 라이선스 하에 출시됩니다. 계산이 보통 무너지는 곳은 나머지 모든 것입니다. GPU 인프라(합리적으로 예산 책정됨), 그것을 운영할 팀(예산 부족), 결정에서 프로덕션까지의 시간(기회 비용으로 복리), 그리고 지속적인 유지보수(끝나지 않음). 3년 기간으로 보면 인력 비용은 보통 인프라 비용의 2~3배를 초과합니다. <strong>API 청구 대비 손익분기점은 대부분의 기업이 생각하는 것보다 더 멀리 있습니다.</strong></p>

<h3>진지한 내부 LLM을 운영하려면 팀이 얼마나 커야 합니까?</h3>
<p>몇 개의 사업부의 경우 <strong>6~10명</strong>. 복잡한 엔터프라이즈 전반에 걸쳐 여러 사업부를 서비스하는 더 큰 배포의 경우 <strong>15~20명</strong>. 구성은 ML 플랫폼 엔지니어(2~4명), ML 운영 엔지니어(2~3명), 평가 엔지니어(1~2명), 워크플로우 통합 엔지니어(주요 워크플로우 도메인당 2~3명), 기술 리더십(최소 시니어 엔지니어 1명)입니다. 인원수로는 소규모이지만 소진 비율은 높습니다 — 적합한 기술을 갖춘 ML 엔지니어는 일반 엔지니어링 시장보다 훨씬 높은 연봉을 받습니다. <em>팀 비용이 대부분의 예측이 과소 책정하는 부분입니다.</em></p>

<h3>자체 호스팅이 실제로 올바른 답인 경우는 언제입니까?</h3>
<p>세 가지 구체적인 경우입니다. 첫째, <strong>데이터 위치 제약이 절대적인 경우</strong> — 안전장치에 관계없이 어떤 외부 엔드포인트로도 데이터를 보낼 수 없는 워크플로우는 내부에서 실행되어야 합니다. 비용은 제약을 충족하는 비용입니다. 둘째, <strong>워크플로우 요청량이 고정 비용을 정당화하는 경우</strong> — 지속적인 하루 수백만 건의 요청은 인프라와 팀 비용을 충분한 작업량에 걸쳐 분산시켜 토큰당 청구보다 유리하게 만듭니다. 셋째, <strong>전략적 근거가 명확하고 자금이 확보된 경우</strong> — 내부 AI 역량을 장기 투자로 구축하는 것으로, <em>"API 비용을 절약하겠습니다"</em>의 부산물이 아닌 3년 비용에 대한 완전한 가시성을 가지고 내려져야 합니다.</p>

<h3>자체 호스팅이 잘못된 답인 경우는 언제입니까?</h3>
<p>세 가지 구체적인 경우입니다. <strong>데이터 위치 제약을 변환으로 해결할 수 있는 경우</strong> — 캡슐화, 토큰화, 고객 제어 매핑을 통해 데이터가 EU 지역에 머물 수 있는 워크플로우에서 적절한 안전장치를 갖춘 외부 엔드포인트가 더 빠르고, 저렴하고, 더 역량 있습니다. <strong>워크플로우가 frontier 역량을 필요로 하는 경우</strong> — 내부 모델은 복잡한 추론, 긴 컨텍스트, 익숙하지 않은 문서 유형에서 frontier에 뒤처집니다. 이 격차를 허용할 수 없는 워크플로우에 자체 호스팅하면 작동하지만 성능이 저하된 시스템이 만들어집니다. <strong>비용 예측에 전체 팀이 포함되지 않은 경우</strong> — 인프라에 대해서만 자금이 지원된 프로그램은 인력 부족으로 힘들게 진행되거나, 다른 작업을 위한 예산을 조용히 흡수합니다.</p>

<h3>자체 호스팅을 결정하는 것에서 프로덕션 AI를 가동하는 것까지 현실적인 일정은 얼마나 됩니까?</h3>
<p>대부분의 기업에서 <strong>9~18개월</strong>. 조달에 몇 주, 초기 서빙 스택 배포에 더 많은 주, 첫 번째 워크플로우를 통합하고 유용하게 만드는 데 몇 달, 여러 워크플로우를 안정적으로 운영하기 위한 운영 성숙도 달성에는 더 오래 걸립니다. 이 기간 동안 기업은 프로젝트가 서비스하기로 한 워크플로우에서 AI가 없거나, 프로젝트가 대체하려 했던 외부 엔드포인트를 통해 AI를 사용합니다. <em>기회 비용은 실재합니다.</em> 그리고 같은 기간 동안 외부 LLM 지형은 계속 발전합니다 — 마침내 프로덕션에 투입되는 내부 모델은 이미 뒤처져 있을 수 있습니다.</p>

<h3>시스템이 가동되면 비용이 멈춥니까?</h3>
<p>아닙니다 — 카테고리가 이동할 뿐입니다. <strong>모델 업데이트</strong>(몇 달마다 새로운 오픈소스 릴리스가 나와 평가, 마이그레이션, 병렬 평가, 전환이 필요합니다). <strong>품질 모니터링</strong>(워크플로우가 진화하고, 입력 분포가 변하고, 평가 인프라가 저하를 감지해야 합니다). <strong>인프라 업데이트</strong>(서빙 스택 업데이트, GPU 드라이버 변경, 보안 패치, 클라우드 폐기). <strong>워크플로우 진화</strong>(새로운 프롬프트 개발, 기존 프롬프트 폐기, 통합 업데이트). 이것이 예측하기 가장 어려운 비용입니다. 초기 예산에 나타나지 않기 때문입니다 — <em>증가하는 워크플로우 포트폴리오에 대한 팀의 지속적인 소진으로 3년 기간에 걸쳐 나타납니다.</em></p>

<h3>대부분의 기업이 결국 도달하는 패턴은 무엇입니까?</h3>
<p>Hybrid입니다 — 정치적 타협이 아니라 각 워크플로우 카테고리의 비용 프로파일을 실제 제약에 맞추는 아키텍처로서. 자체 호스팅 인프라는 진정으로 필요한 워크플로우(절대 제약 사례, 전략 투자 사례, 수학이 맞는 요청량 사례)를 처리합니다. 변환을 갖춘 외부 엔드포인트가 나머지를 처리합니다. <strong>팀은 하나의 라우팅 레이어, 하나의 거버넌스 프레임워크, 두 개의 백엔드를 운영합니다</strong> — 모든 것을 처리해야 하는 하나의 백엔드를 운영하는 것보다 실질적으로 낮은 총 비용으로.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hidden-cost-of-building-your-own-llm",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "ko-KR",
    breadcrumbLabel: "자체 엔터프라이즈 LLM 구축의 숨겨진 비용",
    faqJsonLd: "{ \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [ {\"@type\":\"Question\",\"name\":\"자체 호스팅 AI가 외부 API의 토큰당 비용을 지불하는 것보다 저렴하지 않습니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"모델뿐만 아니라 모든 것을 포함한 계산일 때만 그렇습니다. 모델 자체는 무료입니다 — Llama, Mistral, Qwen, 그리고 그 후속 모델들은 토큰당 수수료 없이 엔터프라이즈 친화적 라이선스 하에 출시됩니다. 계산이 보통 무너지는 곳은 나머지 모든 것입니다. GPU 인프라(합리적으로 예산 책정됨), 그것을 운영할 팀(예산 부족), 결정에서 프로덕션까지의 시간(기회 비용으로 복리), 그리고 지속적인 유지보수(끝나지 않음). 3년 기간으로 보면 인력 비용은 보통 인프라 비용의 2~3배를 초과합니다. API 청구 대비 손익분기점은 대부분의 기업이 생각하는 것보다 더 멀리 있습니다.\"}}, {\"@type\":\"Question\",\"name\":\"진지한 내부 LLM을 운영하려면 팀이 얼마나 커야 합니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"몇 개의 사업부의 경우 6~10명. 복잡한 엔터프라이즈 전반에 걸쳐 여러 사업부를 서비스하는 더 큰 배포의 경우 15~20명. 구성은 ML 플랫폼 엔지니어(2~4명), ML 운영 엔지니어(2~3명), 평가 엔지니어(1~2명), 워크플로우 통합 엔지니어(주요 워크플로우 도메인당 2~3명), 기술 리더십(최소 시니어 엔지니어 1명)입니다. 팀 비용이 대부분의 예측이 과소 책정하는 부분입니다.\"}}, {\"@type\":\"Question\",\"name\":\"자체 호스팅이 실제로 올바른 답인 경우는 언제입니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"세 가지 구체적인 경우입니다. 첫째, 데이터 위치 제약이 절대적인 경우. 둘째, 워크플로우 요청량이 고정 비용을 정당화하는 경우. 셋째, 전략적 근거가 명확하고 자금이 확보된 경우.\"}}, {\"@type\":\"Question\",\"name\":\"자체 호스팅이 잘못된 답인 경우는 언제입니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"세 가지 구체적인 경우입니다. 데이터 위치 제약을 변환으로 해결할 수 있는 경우. 워크플로우가 frontier 역량을 필요로 하는 경우. 비용 예측에 전체 팀이 포함되지 않은 경우.\"}}, {\"@type\":\"Question\",\"name\":\"자체 호스팅을 결정하는 것에서 프로덕션 AI를 가동하는 것까지 현실적인 일정은 얼마나 됩니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"대부분의 기업에서 9~18개월. 기회 비용은 실재합니다. 그리고 같은 기간 동안 외부 LLM 지형은 계속 발전합니다.\"}}, {\"@type\":\"Question\",\"name\":\"시스템이 가동되면 비용이 멈춥니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"아닙니다 — 카테고리가 이동할 뿐입니다. 모델 업데이트, 품질 모니터링, 인프라 업데이트, 워크플로우 진화가 지속됩니다. 이것이 예측하기 가장 어려운 비용입니다.\"}}, {\"@type\":\"Question\",\"name\":\"대부분의 기업이 결국 도달하는 패턴은 무엇입니까?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Hybrid입니다. 자체 호스팅 인프라는 진정으로 필요한 워크플로우를 처리합니다. 변환을 갖춘 외부 엔드포인트가 나머지를 처리합니다. 팀은 하나의 라우팅 레이어, 하나의 거버넌스 프레임워크, 두 개의 백엔드를 운영합니다.\"}} ] }",
    relatedSectionLabel: "다음으로 읽어볼 글",
    related1Title: "엔터프라이즈 AI를 어디서 실행할 것인가: 외부, on-premise, 또는 둘 다",
    related1Href: "/resources/learn/where-to-run-enterprise-ai",
    related2Title: "Cloud와 로컬 모델 사이에서 AI 워크플로우 라우팅하기",
    related2Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related3Title: "AI가 네트워크 접근 없이 실행되어야 할 때",
    related3Href: "/resources/learn/when-ai-must-run-without-network-access",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Zurück",
    backHref: "/resources/learn",
    title: "Die versteckten Kosten des eigenständigen LLM-Betriebs im Unternehmen",
    lead: "Einen LLM auf eigener Infrastruktur zu betreiben ist eine vertretbare Entscheidung — aber die Kostenstruktur ist asymmetrisch. Das Modell ist der günstige Teil. Eine sachliche Betrachtung der tatsächlichen Kosten von Self-Hosted-KI: wo Teams zu knapp kalkulieren und wann diese Entscheidung die richtige ist.",
    category: "KI-Architektur",
    readTime: "~10 Min. Lesezeit",
    dateUpdated: "Mai 2026",
    tldrLabel: "Kurzfassung",
    tldrBody: "Self-Hosting eines LLM ist eine vertretbare Entscheidung — die Kostenstruktur ist jedoch asymmetrisch, und die meisten Kalkulationen erfassen sie nicht vollständig. Das Modell selbst ist kostenfrei. Infrastrukturkosten sind real und werden gewöhnlich budgetiert. Das Personal ist die Kostenkomponente, die Projektionen am häufigsten sprengt: mindestens sechs bis zehn Engineers für kleinere Deployments, fünfzehn bis zwanzig für größere. Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. Das Betriebsmodell, bei dem die meisten Unternehmen landen, ist hybrid: Self-Hosted für Workflows, die es erfordern, externe Endpunkte mit Transformationsschicht für die übrigen — unter einer gemeinsamen Routing-Schicht und einem einheitlichen Governance-Framework.",
    bodyHtml: `<h2>1. Warum Teams sich zunächst für Self-Hosting entscheiden</h2>
<p>Die Entscheidung, einen LLM auf der eigenen Unternehmensinfrastruktur zu betreiben, ist grundsätzlich nachvollziehbar. Es gibt Workflows, bei denen dies die richtige Antwort ist, Umgebungen, bei denen es die einzige Antwort ist, und strategische Gründe, in interne KI-Kompetenz zu investieren — selbst wenn externe Optionen verfügbar sind. <strong>Das steht nicht zur Debatte.</strong></p>
<p>Die entscheidende Frage lautet: Versteht das Team, das diese Entscheidung trifft, worauf es sich tatsächlich einlässt? In einer bemerkenswert hohen Zahl von Unternehmens-KI-Programmen wurde die Entscheidung für einen internen Betrieb auf Basis eines Kostenmodells getroffen, das sich in vorhersehbarer Weise als unzutreffend erweist. Das Modell selbst — die eigentlichen Gewichte, das Open-Source-Release, das das Team deployen will — <strong>ist der günstigste Teil des Deployments</strong>. Die übrige Kostenstruktur birgt die Überraschungen, und die meisten davon zeigen sich erst Monate nachdem die Entscheidung kaum noch umkehrbar ist.</p>
<p>Dieser Artikel beleuchtet die Kostenschichten des ernsthaften internen LLM-Betriebs, was jede davon tatsächlich bedeutet und wo Teams systematisch zu knapp kalkulieren. <em>Es ist kein Argument gegen Self-Hosting. Es ist der Versuch, die Entscheidung auf informierter Grundlage zu treffen.</em></p>
<p>Bevor es um die Kosten geht, lohnt sich ein präziser Blick auf die Gründe, die Unternehmen zum Self-Hosting führen. Die Gründe sind real — und die Architektur sollte ihnen entsprechen.</p>
<ul>
  <li><strong>Datenlokalisierungsanforderungen sind absolut.</strong> Manche Workflows dürfen Daten unter keinen Umständen an externe Endpunkte senden — unabhängig von Transformation oder Schutzmaßnahmen. Verteidigungsoperationen, bestimmte regulierte Kategorien im Gesundheitswesen, Abhördaten, klassifizierte Finanzworkflows. Für diese ist Self-Hosting keine Wahl, sondern die einzige funktionsfähige Architektur. Die Kostenanalyse betrifft dann <em>welches</em> interne Deployment — nicht <em>ob</em> intern deployt werden soll.</li>
  <li><strong>Sektorspezifische Verpflichtungen schränken die Deployment-Topologie ein.</strong> Ein Telekommunikationsunternehmen unter sektorspezifischen Datenlokalisierungsanforderungen muss Teile seiner operativen KI möglicherweise innerhalb des eigenen Netzes betreiben — selbst wenn transformationsbasierte Ansätze die Restriktion theoretisch adressieren könnten. Der Vertrag oder die Datenpositionierung ist verbindlich, unabhängig von der Architektur.</li>
  <li><strong>Strategischer Kompetenzaufbau.</strong> Manche Unternehmen betrachten KI als langfristige Kernkompetenz, die sie aufbauen wollen — nicht mieten. Die Überlegung: KI wird zentral für das Geschäft, die Anbieterlandschaft ist unsicher, und das Unternehmen zieht es vor, interne Expertise aufzubauen. Das ist eine vertretbare Position, die nicht von Datenlokalisierungsrestriktionen abhängt.</li>
  <li><strong>Kostenprognose bei hohem Volumen.</strong> Bei Workflows mit sehr hohem Anfragevolumen übersteigen die Per-Token-Kosten externer API-Aufrufe irgendwann die Fixkosten des eigenen Infrastrukturbetriebs. Für die meisten Unternehmen liegt dieser Punkt weiter in der Zukunft, als sie annehmen — aber die Prognose ist gelegentlich der explizite Grund für Self-Hosting.</li>
  <li><strong>Betriebliche Planbarkeit.</strong> Externe LLM-Anbieter ändern Modelle, Preise, Vertragsbedingungen und Verfügbarkeit ohne Zustimmung des Unternehmens. Für Workflows, bei denen diese Volatilität nicht akzeptabel ist, hat die interne Kontrolle über den Modell-Lebenszyklus einen realen Wert.</li>
</ul>
<p>Jeder dieser Punkte ist eine legitime Grundlage für Self-Hosting. <strong>Der Fehler liegt nicht in der Begründung — er liegt im Budget, das nach der Entscheidung angesetzt wird.</strong></p>

<h2>2. Das Modell — der günstige Teil</h2>
<p>Die erste Überraschung für Teams, die diesen Weg zum ersten Mal gehen: <strong>Das Modell selbst kostet nahezu nichts.</strong></p>
<p>Die führenden Open-Source-Modelle — Llama, Mistral, Qwen und ihre Nachfolger — werden unter Lizenzen veröffentlicht, die Unternehmensnutzung ohne Per-Token-Gebühren erlauben. Das Herunterladen der Gewichte ist kostenlos. Die Quantisierung für verfügbare Hardware ist kostenlos. Es gibt keine Lizenzverhandlungen, keine nutzungsbasierte Abrechnung, keine Sitzlizenzen für das Modell als solches.</p>
<p>Das ist der sichtbare Teil der Kostenanalyse — und der Ausgangspunkt für optimistische Projektionen: <em>„Das Modell ist kostenlos; der Eigenbetrieb muss günstiger sein als die API."</em> Die Kalkulation wirkt überzeugend, solange nur die Modellkosten einbezogen sind.</p>
<p><strong>Was die Kalkulation auslässt, ist alles andere.</strong></p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-labelledby="cost-layers-title cost-layers-desc">
      <title id="cost-layers-title">The asymmetric cost layers of self-hosted LLMs</title>
      <desc id="cost-layers-desc">A diagram showing five cost layers of self-hosted LLM deployment, stacked from smallest (model) to largest (people), with time and maintenance shown as bands that compound over the multi-year horizon.</desc>
      <defs>
        <marker id="arrow-time" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309"/>
        </marker>
      </defs>
      <text x="40" y="34" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SELF-HOSTED LLM · COST LAYERS</text>
      <text x="920" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">3-YEAR HORIZON</text>
      <text x="160" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Layer</text>
      <text x="540" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Relative cost weight</text>
      <text x="860" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Budgeted?</text>
      <g>
        <rect x="40" y="86" width="240" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="60" y="106" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Model</text>
        <text x="60" y="122" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">weights · licence · quantisation</text>
        <rect x="300" y="92" width="60" height="32" rx="4" fill="#0ea5a4"/>
        <text x="370" y="113" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Free</text>
        <text x="860" y="113" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Yes ✓</text>
      </g>
      <g>
        <rect x="40" y="140" width="240" height="60" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Infrastructure</text>
        <text x="60" y="176" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">GPU · serving stack · monitoring</text>
        <text x="60" y="190" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">storage · network · scaling</text>
        <rect x="300" y="152" width="200" height="36" rx="4" fill="#5b4fe9"/>
        <text x="510" y="175" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Medium</text>
        <text x="860" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Usually ✓</text>
      </g>
      <g>
        <rect x="40" y="210" width="240" height="100" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="2"/>
        <text x="60" y="232" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">People</text>
        <text x="60" y="248" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML platform engineers (2–4)</text>
        <text x="60" y="262" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML ops engineers (2–3)</text>
        <text x="60" y="276" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Evaluation engineers (1–2)</text>
        <text x="60" y="290" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Workflow integration (2–3 per domain)</text>
        <text x="60" y="304" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Technical leadership</text>
        <rect x="300" y="232" width="520" height="56" rx="4" fill="#ef5350"/>
        <text x="560" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#ffffff">2–3× infrastructure cost over 3 years</text>
        <text x="860" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Under-budgeted ✗</text>
      </g>
      <line x1="40" y1="332" x2="920" y2="332" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="40" y="354" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">COMPOUNDS OVER TIME</text>
      <g>
        <rect x="40" y="368" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="388" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Time</text>
        <text x="60" y="406" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">9–18 months from decision to production AI</text>
        <text x="60" y="418" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">opportunity cost on workflows that wait · external models advance during the build</text>
        <line x1="680" y1="396" x2="900" y2="396" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="388" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">opportunity cost</text>
      </g>
      <g>
        <rect x="40" y="432" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="452" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Maintenance</text>
        <text x="60" y="470" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Model updates · quality monitoring · infrastructure patches · workflow evolution</text>
        <text x="60" y="482" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">sustained team burn against a growing portfolio of workflows — doesn't appear in initial budget</text>
        <line x1="680" y1="460" x2="900" y2="460" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="452" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">never ends</text>
      </g>
      <text x="480" y="510" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">The model is the visible part. The cost lives in the layers below.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Das Modell ist die günstigste Schicht. Personalkosten dominieren die Mehrjahreskalkulation konsequent. Zeit und Wartung kumulieren sich — und erscheinen nicht im ursprünglichen Budget.</strong></figcaption>
</figure>

<h2>3. Infrastruktur — die Schicht, für die die meisten Teams budgetieren</h2>
<p>Die nächste Kostenschicht ist die Infrastruktur — und <strong>dies ist die Schicht, für die die meisten Teams tatsächlich budgetieren, häufig auch realistisch</strong>.</p>
<p>Den ernsthaften Betrieb eines Open-Source-Modells in Produktion erfordert GPUs. Die genaue Spezifikation hängt von Modellgröße, Quantisierungsstufe, erforderlichem Durchsatz und Latenzzielen ab. Ein kleines Deployment mit einem quantisierten Modell mittlerer Größe für interne Workflows mit geringem Durchsatz lässt sich auf wenigen Enterprise-GPUs zu überschaubaren Kosten betreiben. Ein ernsthaftes Deployment mit einem größeren Modell für Produktionsworkflows mit hohem Durchsatz benötigt einen dedizierten GPU-Cluster — inklusive Kühlung, Stromversorgung und Netzwerkinfrastruktur.</p>
<p>Die GPU-Kosten lassen sich kalkulieren. Ein Team, das die Vorarbeit geleistet hat, weiß, was benötigt wird und was es kostet — ob als Hardware-Investition, als reservierte Cloud-Instanzen oder als Kombination. <strong>Der Investitionsanteil erhält in der Regel angemessene Budgetaufmerksamkeit.</strong></p>
<p>Weniger präzise budgetiert wird auf dieser Ebene häufig die unterstützende Infrastruktur, die die GPUs erst nutzbar macht: der Model-Serving-Stack (<code>vLLM</code>, <code>TGI</code> oder vergleichbare Lösungen), Request-Routing und Load-Balancing vor der Serving-Schicht, Storage für Modellgewichte und Caches, Netzwerkkapazität für das Anfragevolumen sowie die Monitoring-Infrastruktur, die das Gesamtsystem überwacht. Einzeln sind diese Komponenten nicht teuer, in der Summe schlagen sie zu Buche — und erfordern sorgfältige Planung. Der Serving-Stack hat sich in den letzten Jahren erheblich weiterentwickelt; <em>er ist kein Forschungsartefakt mehr, aber noch immer Infrastruktur, die das Team deployen und betreiben muss</em>.</p>
<p>Über das initiale Deployment hinaus muss die Infrastruktur mit der Nutzung skalieren. Ein Workflow, der von hundert auf zehntausend Anfragen pro Tag wächst, benötigt proportional mehr Kapazität. Das ist der routinemäßige Aufwand produktiver Systeme — er sollte in die Mehrjahresplanung einfließen statt durch die Annahme abgetan zu werden, das Budget vom ersten Tag reiche langfristig aus.</p>

<h2>4. Personal — die unterschätzte Kostenschicht</h2>
<p>Die Schicht, bei der Projektionen am häufigsten scheitern, ist das Personal. <strong>Den Produktionsbetrieb eines LLM übernimmt nicht nebenbei das bestehende Infrastrukturteam.</strong> Er erfordert ein dediziertes Team mit spezifischen Qualifikationen — die auf dem aktuellen Markt kostspielig sind.</p>
<p>Ein Mindestteam für den ernsthaften internen LLM-Betrieb umfasst:</p>
<ul>
  <li><strong>ML-Platform-Engineers</strong>, die Model-Serving, Quantisierung, Durchsatzoptimierung und die Betriebseigenschaften des Inference-Stacks verstehen. <em>Zwei bis vier Engineers</em>, abhängig vom Umfang.</li>
  <li><strong>ML-Operations-Engineers</strong>, die Monitoring, Alerting, Kapazitätsplanung und die On-Call-Rotation für die Inferenz-Infrastruktur verantworten. <em>Zwei bis drei Engineers</em> — in kleineren Teams häufig mit Überlappung zu den Platform-Engineers.</li>
  <li><strong>Evaluierungs-Engineers</strong>, die die Golden-Datasets, die Evaluierungspipelines, das Qualitätsmonitoring und das Regressionstest-Verfahren für Modell-Updates pflegen. <em>Ein bis zwei Engineers</em>, mit erheblichem Input von den Workflow-Teams, die das Modell nutzen.</li>
  <li><strong>Workflow-Integration-Engineers</strong>, die die Schicht zwischen der Modell-API und den tatsächlichen Geschäftsprozessen aufbauen und warten. Die Zahl skaliert mit der Anzahl der Workflows; <em>typischerweise zwei bis drei Engineers pro großem Workflow-Bereich</em>.</li>
  <li><strong>Technische Führungskräfte</strong> mit ausreichend ML- und Infrastrukturerfahrung für architektonische Entscheidungen und die Überprüfung der Arbeit. <em>Mindestens ein Senior-Engineer</em>, bei größeren Deployments häufig eine kleine Führungsgruppe.</li>
</ul>
<p>Für ein Unternehmen, das interne LLMs für einige Geschäftsbereiche betreibt, sind das <strong>sechs bis zehn Personen</strong>. Für ein größeres Deployment, das mehrere Geschäftsbereiche in einem komplexen Unternehmen bedient, sind es <strong>fünfzehn bis zwanzig</strong>.</p>
<p>Die Kosten dieser Teams sind in jedem größeren Markt erheblich. ML-Engineers mit den erforderlichen Qualifikationen werden deutlich oberhalb des allgemeinen Engineering-Marktes vergütet. <strong>Das Team ist klein in der Kopfzahl, aber aufwendig im laufenden Aufwand.</strong> Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um einen deutlichen Faktor — bei vielen Deployments <em>um das Zwei- bis Dreifache</em>.</p>
<p>Das ist die Kalkulation, die sich am häufigsten verschiebt, wenn das Team, das das Projekt vorgeschlagen hat, die Personalkosten anfänglich nicht verantwortet. Das Infrastrukturbudget wird freigegeben; das Team muss eingestellt werden; und sobald das Team eingestellt ist, muss das restliche Programm es finanzieren.</p>

<h2>5. Zeit — die kumulierende Kostenkomponente</h2>
<p>Eine Kategorie, der sich schwer eine konkrete Zahl zuordnen lässt, die aber leicht unterschätzt wird: Zeit. Konkret <strong>die Lücke zwischen der Entscheidung für Self-Hosting und dem produktiven Betrieb eines nützlichen Workflows</strong>.</p>
<p>Die Entscheidung fällt schnell. Die Beschaffung von Hardware oder die Bindung an Cloud-Kapazitäten dauert Wochen. Das initiale Deployment des Serving-Stacks und eines ersten Modells dauert weitere Wochen. Einen ersten Workflow zu integrieren und produktiv zu machen dauert Monate. Die betriebliche Reife für den zuverlässigen Betrieb mehrerer Workflows zu erreichen dauert noch länger.</p>
<p>Für die meisten Unternehmen liegt der realistische Zeitrahmen von <em>„Wir bauen das selbst"</em> bis <em>„Wir betreiben produktive KI darauf"</em> zwischen <strong>neun und achtzehn Monaten</strong>. Manche Teams sind schneller; viele sind langsamer. In diesem Zeitfenster hat das Unternehmen entweder keine KI in den Workflows, die das Projekt bedienen soll — oder es nutzt KI über externe Endpunkte, die das Projekt eigentlich ablösen sollte.</p>
<p>Das hat zwei Konsequenzen. Die erste sind die <strong>Opportunitätskosten</strong>: Die Workflows, die durch KI hätte verbessert werden sollen, werden während der Aufbauphase nicht verbessert — der geschäftliche Wert dieser Verzögerung ist real. Die zweite ist das <strong>strategische Risiko</strong>: Im selben Zeitfenster entwickelt sich die externe LLM-Landschaft weiter — das interne Modell, das schließlich produktiv geht, kann bereits zwei Iterationen hinter dem externen Angebot zurückliegen.</p>
<p>Ein häufiges Muster: <em>Das interne Modell erreicht Produktionsqualität genau dann, wenn das Team feststellt, dass der Workflow, den es eigentlich unterstützen sollte, in der Zwischenzeit auf externe Endpunkte umgestellt wurde.</em> <strong>Das Projekt gelingt technisch — und scheitert strategisch.</strong></p>

<h2>6. Wartung — die Kostenkomponente, die nicht endet</h2>
<p>Sobald das System läuft, hören die Kosten nicht auf. <strong>Sie verlagern sich in eine andere Kategorie.</strong></p>
<ul>
  <li><strong>Modell-Updates.</strong> Alle paar Monate werden neue Open-Source-Modelle mit deutlich verbesserten Fähigkeiten veröffentlicht. Das Team muss jedes Release evaluieren, über ein Upgrade entscheiden, die Migration planen, die parallele Evaluierung durchführen und die Umstellung vollziehen. Für ein einzelnes Modell ist das ein wiederkehrendes Engineering-Projekt — nicht riesig, aber <em>kontinuierlich</em>. Bei mehreren Modellen für verschiedene Workflows nimmt das einen erheblichen Teil der Teamkapazität in Anspruch.</li>
  <li><strong>Evaluierung und Qualitätsmonitoring.</strong> Das Modell, das im letzten Quartal gut funktioniert hat, muss nicht dieselbe Qualität auf der aktuellen Eingabeverteilung liefern. Workflows entwickeln sich weiter, Dokumente ändern sich, Geschäftskontexte verschieben sich. Die Evaluierungsinfrastruktur muss Qualitätsdrift erkennen, <em>bevor</em> Nutzer es bemerken. Das ist kontinuierliche Engineering-Arbeit — keine einmalige Einrichtung.</li>
  <li><strong>Infrastruktur-Updates.</strong> Der Serving-Stack erhält Aktualisierungen; GPU-Treiber ändern sich; Sicherheits-Patches erscheinen; Cloud-Plattformen deprecaten Dienste. Nichts davon ist dramatisch, aber das Team muss aktuell bleiben und Änderungen einpflegen, ohne die Produktionsworkflows zu beeinträchtigen.</li>
  <li><strong>Workflow-Evolution.</strong> Mit dem Unternehmen verändern sich die Workflows, die das Modell unterstützt. Neue Prompts müssen entwickelt, evaluiert und ausgerollt werden. Alte Prompts müssen zurückgezogen werden. Workflow-Integrationen müssen aktualisiert werden. <em>Das Team, das das System aufgebaut hat, ist das Team, das die Workflows wartet, die es bedient</em> — das ist mehr Arbeit, als der initiale Aufbau vermuten ließ.</li>
</ul>
<p>Die Wartungskosten sind die am schwersten prognostizierbaren, weil <strong>sie im ursprünglichen Budget nicht erscheinen</strong>. Sie zeigen sich über den Mehrjahreszeitraum als dauerhafter Teamaufwand gegen ein wachsendes Portfolio an Workflows. <em>Unternehmen, die mit Self-Hosted-KI erfolgreich sind, haben die Wartungsinvestition von Anfang an eingeplant; Unternehmen, die Schwierigkeiten haben, haben das initiale Deployment für den Gesamtaufwand gehalten.</em></p>

<h2>7. Wann Self-Hosting die richtige Antwort ist</h2>
<p>Angesichts all dessen sind die Fälle, in denen Self-Hosting klar die richtige Antwort ist, spezifisch.</p>
<ul>
  <li><strong>Wenn Datenlokalisierungsanforderungen absolut sind.</strong> Workflows, die Daten unter keinen Umständen an externe Endpunkte senden dürfen, müssen intern betrieben werden. Die Kosten sind die Kosten der Erfüllung dieser Anforderung — die Alternative ist, in diesem Workflow überhaupt keine KI einzusetzen.</li>
  <li><strong>Wenn das Workflow-Volumen die Fixkosten rechtfertigt.</strong> Sehr hohe Anfragevolumina — <em>Millionen von Anfragen pro Tag bei dauerhafter Auslastung</em> — amortisieren Infrastruktur- und Personalkosten über genug Arbeit, um gegenüber Per-Token-Abrechnung vorzuliegen. Der Break-even-Punkt liegt weiter in der Zukunft, als die meisten Unternehmen annehmen — aber für manche Workflows liegt er klar innerhalb des Planungshorizonts.</li>
  <li><strong>Wenn der strategische Fall explizit formuliert und finanziert ist.</strong> Den Aufbau interner KI-Kompetenz als langfristige Investition zu betreiben ist vertretbar. <em>Diese Entscheidung sollte mit vollständiger Transparenz über die Mehrjahreskosten getroffen werden</em> — nicht als Nebeneffekt von <em>„Wir sparen bei den API-Gebühren."</em></li>
</ul>

<h2>8. Wann Self-Hosting die falsche Antwort ist</h2>
<p>Die Fälle, in denen Self-Hosting die falsche Antwort ist, sind ebenfalls spezifisch.</p>
<ul>
  <li><strong>Wenn die Datenlokalisierungsanforderung durch Transformation adressierbar ist.</strong> Für Workflows, bei denen die Daten durch architektonische Maßnahmen in der EU-Region bleiben können — Kapsulierung, Tokenisierung, kundenkontrolliertes Mapping — <em>ist der externe Endpunkt mit geeigneten Schutzmaßnahmen die schnellere, günstigere und leistungsfähigere Lösung</em>. Die Kostenanalyse spricht für diese Workflows in der Regel nicht für Self-Hosting.</li>
  <li><strong>Wenn der Workflow Frontier-Leistungsfähigkeit benötigt.</strong> Das interne Modell liegt beim komplexen Schlussfolgern, langen Kontextfenstern und unbekannten Dokumenttypen hinter dem externen Frontier-Modell zurück. Manche Workflows können mit diesem Rückstand leben; manche nicht. <em>Self-Hosting für Workflows, die das nicht können, erzeugt ein System, das funktioniert, aber zu wenig leistet.</em></li>
  <li><strong>Wenn die Kalkulation das vollständige Team nicht einschloss.</strong> Ein Self-Hosting-Programm, das nur für Infrastruktur finanziert ist, läuft entweder mit Unterbesetzung weiter oder absorbiert stillschweigend das Budget, das für andere Zwecke vorgesehen war. <em>In beiden Fällen holen die tatsächlichen Kosten die optimistische Prognose ein.</em></li>
</ul>

<h2>9. Das Betriebsmodell, bei dem die meisten Unternehmen landen</h2>
<p>Unter Unternehmen, die diesen Weg durchlaufen haben, ist das entstehende Deployment in der Regel kein reines Self-Hosting. <strong>Es ist ein hybrides Modell</strong>, bei dem die selbst betriebene Infrastruktur die Workflows übernimmt, die sie tatsächlich erfordern — die Fälle mit absoluten Restriktionen, die strategischen Investitionsfälle, die Volumenfälle, bei denen die Rechnung aufgeht — und externe Endpunkte mit Transformation den Rest übernehmen.</p>
<p>Das hybride Muster ist kein Kompromiss. <strong>Es ist die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet.</strong> Workflows, die Self-Hosting benötigen, erhalten Self-Hosting. Workflows, die das nicht tun, erhalten externe Endpunkte mit Schutzmaßnahmen. Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends — <em>zu deutlich geringeren Gesamtkosten als ein einziges Backend, das alles abdecken muss</em>.</p>
<p>Für das grundsätzliche Argument, warum Hybrid die architektonisch ehrliche Antwort ist und kein politischer Kompromiss, siehe den Pillar-Artikel zum Thema, wo Enterprise-KI betrieben werden sollte. Für die Routing-Schicht, die Hybrid tatsächlich funktionsfähig macht, siehe den Artikel zum Routing von KI-Workflows zwischen Cloud- und lokalen Modellen. Für Workflows am strikten Ende des Self-Hosting-Spektrums — wo kein externer Endpunkt akzeptabel ist — siehe den Artikel über KI ohne Netzwerkzugang.</p>

<div class="takeaways">
  <div class="takeaways__label">Wichtigste Erkenntnisse</div>
  <ul>
    <li>Das Modell selbst ist kostenfrei — die Überraschungen liegen in jeder anderen Schicht der Kostenstruktur</li>
    <li>Infrastruktur (GPU + Serving-Stack + Monitoring) ist real, wird aber typischerweise angemessen budgetiert</li>
    <li>Personal ist die Schicht, die Projektionen am häufigsten sprengt — mindestens 6–10 Engineers, 15–20 für größere Deployments, mit Personalkosten, die die Infrastrukturkosten über drei Jahre um das 2- bis 3-Fache übersteigen</li>
    <li>Zeit kumuliert sich als Opportunitätskosten — 9–18 Monate vom Beschluss bis zum produktiven KI-Betrieb, in denen Workflows warten und die externe Frontier sich weiterentwickelt</li>
    <li>Wartung endet nicht — Modell-Updates, Qualitätsdrift, Infrastruktur-Patches, Workflow-Evolution akkumulieren sich als dauerhafter Teamaufwand</li>
    <li>Richtig, wenn: Restriktionen absolut sind · Volumen die Fixkosten rechtfertigt · der strategische Fall explizit formuliert und finanziert ist</li>
    <li>Falsch, wenn: Transformation die Restriktion adressieren könnte · der Workflow Frontier-Leistungsfähigkeit benötigt · die Kalkulation das vollständige Team nicht einschloss</li>
    <li>Das Betriebsmodell, bei dem die meisten Unternehmen landen, ist hybrid — Self-Hosted für Workflows, die es erfordern, externe Endpunkte mit Transformation für die übrigen, unter einer Routing-Schicht und einem Governance-Framework</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Ist selbst betriebene KI nicht günstiger als die Per-Token-Abrechnung externer APIs?</h3>
<p>Nur dann, wenn die Kalkulation alles einschließt — nicht nur das Modell. Das Modell selbst ist kostenfrei: Llama, Mistral, Qwen und ihre Nachfolger werden unter unternehmensfreundlichen Lizenzen ohne Per-Token-Gebühren veröffentlicht. Wo die Kalkulation typischerweise bricht, ist alles andere: GPU-Infrastruktur (angemessen budgetiert), das Team für den Betrieb (zu knapp budgetiert), die Zeit zwischen Entscheidung und Produktionsbetrieb (kumuliert als Opportunitätskosten) und laufende Wartung (endet nicht). Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. <strong>Der Break-even-Punkt gegenüber API-Abrechnung liegt weiter in der Zukunft, als die meisten Unternehmen annehmen.</strong></p>

<h3>Wie groß muss das Team für einen ernsthaften internen LLM-Betrieb sein?</h3>
<p>Für einige Geschäftsbereiche sind es <strong>sechs bis zehn Personen</strong>. Für ein größeres Deployment, das mehrere Geschäftsbereiche in einem komplexen Unternehmen bedient, sind es <strong>fünfzehn bis zwanzig</strong>. Die Zusammensetzung: ML-Platform-Engineers (2–4), ML-Operations-Engineers (2–3), Evaluierungs-Engineers (1–2), Workflow-Integration-Engineers (2–3 pro großem Workflow-Bereich) und technische Führungskräfte (mindestens ein Senior-Engineer). Geringe Kopfzahl, aber hoher laufender Aufwand — ML-Engineers mit den erforderlichen Qualifikationen werden deutlich oberhalb des allgemeinen Engineering-Marktes vergütet. <em>Die Teamkosten sind das, was die meisten Projektionen zu knapp ansetzen.</em></p>

<h3>Wann ist Self-Hosting tatsächlich die richtige Antwort?</h3>
<p>Drei spezifische Fälle. Erstens, wenn <strong>Datenlokalisierungsanforderungen absolut sind</strong> — Workflows, die Daten unter keinen Umständen an externe Endpunkte senden dürfen, müssen intern betrieben werden; die Kosten sind die Kosten der Erfüllung dieser Anforderung. Zweitens, wenn <strong>das Workflow-Volumen die Fixkosten rechtfertigt</strong> — dauerhaft Millionen von Anfragen pro Tag amortisieren Infrastruktur- und Teamkosten über genug Arbeit, um gegenüber Per-Token-Abrechnung vorzuliegen. Drittens, wenn <strong>der strategische Fall explizit formuliert und finanziert ist</strong> — Aufbau interner KI-Kompetenz als langfristige Investition, mit vollständiger Transparenz über die Mehrjahreskosten statt als Nebeneffekt von <em>„Wir sparen bei den API-Gebühren."</em></p>

<h3>Wann ist Self-Hosting die falsche Antwort?</h3>
<p>Drei spezifische Fälle. Wenn <strong>die Datenlokalisierungsanforderung durch Transformation adressierbar ist</strong> — für Workflows, bei denen Daten durch Kapsulierung, Tokenisierung und kundenkontrolliertes Mapping in der EU-Region bleiben können, ist der externe Endpunkt mit geeigneten Schutzmaßnahmen schneller, günstiger und leistungsfähiger. Wenn <strong>der Workflow Frontier-Leistungsfähigkeit benötigt</strong> — interne Modelle liegen beim komplexen Schlussfolgern, langen Kontexten und unbekannten Dokumenttypen hinter dem Frontier zurück; Self-Hosting für Workflows, die diesen Rückstand nicht tolerieren können, erzeugt Systeme, die funktionieren, aber zu wenig leisten. Wenn <strong>die Kalkulation das vollständige Team nicht einschloss</strong> — nur für Infrastruktur finanzierte Programme laufen entweder mit Unterbesetzung weiter oder absorbieren Budgets, die für andere Zwecke bestimmt waren.</p>

<h3>Wie lang ist der realistische Zeitrahmen vom Beschluss bis zum produktiven KI-Betrieb?</h3>
<p><strong>Neun bis achtzehn Monate</strong> für die meisten Unternehmen. Beschaffung dauert Wochen, das initiale Serving-Stack-Deployment dauert weitere Wochen, einen ersten Workflow zu integrieren und nutzbar zu machen dauert Monate — und die betriebliche Reife für den zuverlässigen Betrieb mehrerer Workflows zu erreichen dauert noch länger. In diesem Zeitfenster hat das Unternehmen entweder keine KI in den betroffenen Workflows oder nutzt die externen Endpunkte weiter, die das Projekt ablösen sollte. <em>Die Opportunitätskosten sind real</em> — und im selben Zeitfenster entwickelt sich die externe LLM-Landschaft weiter; das interne Modell, das schließlich produktiv geht, kann bereits hinter dem aktuellen Stand zurückliegen.</p>

<h3>Enden die Kosten, sobald das System läuft?</h3>
<p>Nein — sie verlagern sich. <strong>Modell-Updates</strong> (neue Open-Source-Releases alle paar Monate erfordern Evaluierung, Migration, parallele Evaluierung, Umstellung). <strong>Qualitätsmonitoring</strong> (Workflows entwickeln sich, Eingabeverteilungen verschieben sich, die Evaluierungsinfrastruktur muss Drift erkennen). <strong>Infrastruktur-Updates</strong> (Serving-Stack-Aktualisierungen, GPU-Treiber-Änderungen, Sicherheits-Patches, Cloud-Deprecations). <strong>Workflow-Evolution</strong> (neue Prompts entwickeln, alte zurückziehen, Integrationen aktualisieren). Das ist die Kostenkomponente, die am schwersten zu prognostizieren ist, weil sie im ursprünglichen Budget nicht erscheint — <em>sie zeigt sich über mehrere Jahre als dauerhafter Teamaufwand gegen ein wachsendes Workflow-Portfolio</em>.</p>

<h3>Welches Betriebsmodell wählen die meisten Unternehmen am Ende?</h3>
<p>Hybrid — nicht als politischer Kompromiss, sondern als die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet. Die selbst betriebene Infrastruktur übernimmt Workflows, die sie tatsächlich erfordern (Fälle mit absoluten Restriktionen, strategische Investitionsfälle, Volumenfälle, bei denen die Rechnung aufgeht). Externe Endpunkte mit Transformation übernehmen den Rest. <strong>Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends</strong> — zu deutlich geringeren Gesamtkosten als ein einziges Backend, das alles abdecken muss.</p>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/hidden-cost-of-building-your-own-llm",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    inLanguage: "de-DE",
    breadcrumbLabel: "Die versteckten Kosten des eigenständigen LLM-Betriebs im Unternehmen",
    faqJsonLd: "{ \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [ {\"@type\":\"Question\",\"name\":\"Ist selbst betriebene KI nicht günstiger als die Per-Token-Abrechnung externer APIs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Nur dann, wenn die Kalkulation alles einschließt — nicht nur das Modell. Das Modell selbst ist kostenfrei. Wo die Kalkulation typischerweise bricht, ist alles andere: GPU-Infrastruktur, das Team für den Betrieb, die Zeit und laufende Wartung. Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. Der Break-even-Punkt liegt weiter in der Zukunft, als die meisten Unternehmen annehmen.\"}}, {\"@type\":\"Question\",\"name\":\"Wie groß muss das Team für einen ernsthaften internen LLM-Betrieb sein?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Für einige Geschäftsbereiche sind es sechs bis zehn Personen. Für ein größeres Deployment, das mehrere Geschäftsbereiche bedient, sind es fünfzehn bis zwanzig. Die Teamkosten sind das, was die meisten Projektionen zu knapp ansetzen.\"}}, {\"@type\":\"Question\",\"name\":\"Wann ist Self-Hosting tatsächlich die richtige Antwort?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Drei spezifische Fälle. Erstens, wenn Datenlokalisierungsanforderungen absolut sind. Zweitens, wenn das Workflow-Volumen die Fixkosten rechtfertigt. Drittens, wenn der strategische Fall explizit formuliert und finanziert ist.\"}}, {\"@type\":\"Question\",\"name\":\"Wann ist Self-Hosting die falsche Antwort?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Drei spezifische Fälle. Wenn die Datenlokalisierungsanforderung durch Transformation adressierbar ist. Wenn der Workflow Frontier-Leistungsfähigkeit benötigt. Wenn die Kalkulation das vollständige Team nicht einschloss.\"}}, {\"@type\":\"Question\",\"name\":\"Wie lang ist der realistische Zeitrahmen vom Beschluss bis zum produktiven KI-Betrieb?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Neun bis achtzehn Monate für die meisten Unternehmen. Die Opportunitätskosten sind real — und die externe LLM-Landschaft entwickelt sich weiter.\"}}, {\"@type\":\"Question\",\"name\":\"Enden die Kosten, sobald das System läuft?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Nein — sie verlagern sich. Modell-Updates, Qualitätsmonitoring, Infrastruktur-Updates und Workflow-Evolution akkumulieren sich als dauerhafter Teamaufwand.\"}}, {\"@type\":\"Question\",\"name\":\"Welches Betriebsmodell wählen die meisten Unternehmen am Ende?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Hybrid — als die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet. Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends — zu deutlich geringeren Gesamtkosten.\"}} ] }",
    relatedSectionLabel: "Weiterführende Artikel",
    related1Title: "KI im Unternehmen: extern, On-Premise oder beides",
    related1Href: "/resources/learn/where-to-run-enterprise-ai",
    related2Title: "KI-Workflows zwischen Cloud- und lokalen Modellen routen",
    related2Href: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models",
    related3Title: "Wenn KI ohne Netzwerkzugang betrieben werden muss",
    related3Href: "/resources/learn/when-ai-must-run-without-network-access",
    related4Title: "",
    related4Href: "",
  },
}

export default function HiddenCostOfBuildingYourOwnLlm({
  locale = "en",
  backLabel = "",
  backHref = "",
  title = "",
  lead = "",
  category = "",
  readTime = "",
  dateUpdated = "",
  tldrLabel = "",
  tldrBody = "",
  bodyHtml = "",
  canonicalUrl = "",
  datePublished = "",
  dateModified = "",
  inLanguage = "",
  breadcrumbLabel = "",
  faqJsonLd = "",
  relatedSectionLabel = "",
  related1Title = "",
  related1Href = "",
  related2Title = "",
  related2Href = "",
  related3Title = "",
  related3Href = "",
  related4Title = "",
  related4Href = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _title = title || T["title"] || TRANSLATIONS.en["title"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _readTime = readTime || T["readTime"] || TRANSLATIONS.en["readTime"]
  const _dateUpdated = dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"]
  const _tldrLabel = tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"]
  const _tldrBody = tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _canonicalUrl = canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"]
  const _datePublished = datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"]
  const _dateModified = dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"]
  const _inLanguage = inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"]
  const _breadcrumbLabel = breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"]
  const _faqJsonLd = faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"]
  const _relatedSectionLabel = relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"]
  const _related1Title = related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Title = related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Title = related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Title = related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]

  const relatedItems = [
    { title: _related1Title, href: _related1Href },
    { title: _related2Title, href: _related2Href },
    { title: _related3Title, href: _related3Href },
    { title: _related4Title, href: _related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": _title,
    "description": _lead,
    "inLanguage": _inLanguage,
    "datePublished": _datePublished,
    "dateModified": _dateModified || _datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": _canonicalUrl },
  })

  const breadcrumbJsonLd = _breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": _breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {_faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: _faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Figure (inline diagram with SVG) */
        .la-body .ds-figure {
          margin: 28px 0;
          padding: 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
        }
        .la-body .ds-figure__svg-wrap {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .la-body .ds-figure__svg-wrap::-webkit-scrollbar { display: none; }
        .la-body .ds-figure__svg {
          display: block;
          width: 100%;
          height: auto;
          min-width: 640px;
          max-width: 100%;
        }
        .la-body .ds-figure__caption {
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--c-muted, #6b7280);
          text-align: center;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={_backHref} className="la-hero__back">{_backLabel}</a>
              <h1 className="la-hero__title">{_title}</h1>
              <p className="la-hero__lead">{_lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{_category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{_readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{_dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{_tldrLabel}</div>
              <p className="la-tldr__body">{_tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{_relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(HiddenCostOfBuildingYourOwnLlm, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "The Hidden Cost of Building Your Own Enterprise LLM" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "Running your own LLM in production is a defensible choice — but the cost structure is asymmetric. The model is the cheap part. A realistic look at what self-hosted AI actually costs, where teams under-budget, and when it's the right answer.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "AI Architecture" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "~10 min read" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "May 2026" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "Self-hosting an LLM is a defensible choice — but the cost structure is asymmetric and most projections miss it. The model itself is free. Infrastructure is real and usually budgeted. People are the layer that most consistently breaks the projection — six to ten engineers minimum, fifteen to twenty for larger deployments, in a market where ML talent earns well above general engineering rates. Over a three-year horizon the people cost typically exceeds infrastructure by two or three times. Time compounds as opportunity cost: nine to eighteen months from decision to running production AI, during which the workflows the project was meant to serve either go without AI or use the external endpoints the project was meant to replace. Maintenance doesn't end — model updates, quality monitoring, infrastructure patches, workflow evolution accumulate as sustained team burn. Self-hosting is right when constraints are absolute, volume justifies the fixed cost, or the strategic case is explicit and funded. It's wrong when transformation could address the constraint, when workflows need frontier capability, or when the projection didn't include the full team. The pattern most enterprises end up with is hybrid: self-hosted for workflows that need it, external endpoints with transformation for the rest, under one routing layer and one governance framework.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/hidden-cost-of-building-your-own-llm" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-06" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-06" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "en-GB" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "The Hidden Cost of Building Your Own Enterprise LLM" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: "", displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "Where to Read Next" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Where to Run Enterprise AI: External, On-Premise, or Both" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/where-to-run-enterprise-ai" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Routing AI Workflows Between Cloud and Local Models" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/routing-ai-workflows-between-cloud-and-local-models" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "When AI Must Run Without Network Access" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/when-ai-must-run-without-network-access" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
