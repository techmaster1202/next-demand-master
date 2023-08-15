export default function PricingCard() {
    return (
        <div className="pricing-unit space-top--x-large">
            <div className="pricing-unit__plans">
                {/* left pricing card start */}
                <div className="pricing-unit__plan pricing-unit__plan--standard">
                    <div className="plan-content">
                        <h2>Sales Acceleration</h2>
                        <p>Ideal for sales people who <br />wants to scale sales using <br />LinkedIn, Email + AI</p>
                        <ul>
                            <li>Linkedin Automations</li>
                            <li>AI (DemandGPT)</li>
                            <li>Email Automations</li>
                            <li className="hint">Visitor Tracking 100/month</li>
                            <li className="hint">People Tracking 20/month</li>
                            <li>Sentiment Analysis</li>
                            <li>Sync to CRM on Reply</li>
                            <li>Integrations</li>
                            <li>1-1 Personalisation</li>
                            <li>Unified Inbox for replies</li>
                            <li>Double Verified Emails</li>
                            <li>Duplication Control</li>
                            <li>Technology Targeting</li>
                            <li>Reply Detection</li>
                        </ul>
                    </div>
                    <div className="plan-price">
                        <h3>$99/user/month</h3>
                        <a className="button button--glow button--medium" href="https://3.basecamp.com/signup/account/new?plan=per_user_v3" data-controller="signup" data-action="signup#track">Start Selling with AI</a>
                    </div>
                </div>
                {/* left pricing card end */}

                {/* central pricing card start */}
                <div className="pricing-unit__plan pricing-unit__plan--unlimited">
                    <div className="plan-content">
                        <h2>All-In-One <span>IDEAL FOR TEAMS</span></h2>
                        <p>For go to market teams that want’s to benefit <br />from Linkedin, Email Outreach, Social Selling <br />and identify visitor automations. All based on <br />AI saving teams hours per day.</p>
                        <p className="hint">Everything in Sales and Social Selling modules</p>
                        <ul>
                            <li>Social Selling Monitoring</li>
                            <li>Workflow for comments</li>
                            <li>AI Automation for comments</li>
                            <li>Personalised comments</li>
                            <li>Automatically Like posts</li>
                        </ul>
                    </div>
                    <div className="plan-price">
                        <h3>$149/user/month, billed annually</h3>
                        <a className="button button--glow button--medium" href="https://3.basecamp.com/signup/account/new?plan=pro_unlimited_yearly_v1" data-controller="signup" data-action="signup#track" >Start Selling with AI</a>
                    </div>
                </div>
                {/* central pricing card end */}

                {/* right pricing card start */}
                <div className="pricing-unit__plan pricing-unit__plan--standard">
                    <div className="plan-content">
                        <h2>Social Selling</h2>
                        <p>When you want to build a <br />strong brand on LinkedIn and engage with potential <br />customers in public.</p>
                        <p className="hint">Sales Navigator is required:</p>
                        <ul>
                            <li>Social Selling Monitoring</li>
                            <li>Workflow for comments</li>
                            <li>AI Automation for comments</li>
                            <li>Personalised comments</li>
                            <li>Automatically Like posts</li>
                        </ul>
                    </div>
                    <div className="plan-price">
                        <h3>$99/user/month</h3>
                        <a className="button button--glow button--medium" href="https://3.basecamp.com/signup/account/new?plan=per_user_v3" data-controller="signup" data-action="signup#track">Start Selling with AI</a>
                    </div>
                </div>
                {/* right pricing card end */}
            </div>
        </div>
    );
}