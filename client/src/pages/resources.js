import React from "react";
import PageWrapper from "../components/PageWrapper";
import './resources.css';

function Resources() {
    return (
        <PageWrapper>
            <div className="container pt-3">
                <div className="resources pb-5">
                    {/* This is needed for the parralax */}
                    <h2 className="text-center">No matter your situation, help is available. Reach out!</h2>
                    <h2 className="subheading pt-5">Websites/Hotlines</h2>
                    <div className="resource d-flex flex-column pb-3">
                        <strong style={{ color: '#000' }}>The National Domestic Violence Hotline</strong>
                        <a href="tel:18007997233" style={{ color: '#666' }}>1-800-799-7233 (SAFE)</a>
                        <a href="https://www.ndvh.org/" target="_blank" style={{ color: '#666' }}>www.ndvh.org/</a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <strong style={{ color: '#000' }}>National Dating Abuse Hotline</strong>
                        <a href="tel:18663319474" style={{ color: '#666' }}>1-866-331-9474</a>
                        <a href="https://www.loveisrespect.org/" target="_blank" style={{ color: '#666' }}>www.loveisrespect.org/</a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <strong style={{ color: '#000' }}>National Child Abuse Hotline/Childhelp</strong>
                        <a href="tel:18004224453" style={{ color: '#666' }}>1-800-4-A-CHILD (1-800-422-4453)</a>
                        <a href="https://www.childhelp.org/" target="_blank" style={{ color: '#666' }}>www.childhelp.org/</a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <strong style={{ color: '#000' }}>Futures Without Violence: The National Health Resource Center on Domestic Violence</strong>
                        <a href="tel:18887922873" style={{ color: '#666' }}>1-888-792-2873</a>
                        <a href="https://www.futureswithoutviolence.org/" target="_blank" style={{ color: '#666' }}>www.futureswithoutviolence.org/</a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <span><strong style={{ color: '#000' }}>Looking for something more specific?</strong> Check out this comprehensive list of help lines -</span>
                        <a href="https://www.ncadv.org/resources" target="_blank" style={{ color: '#666' }}>www.ncadv.org/resources</a>
                    </div>


                    <h2 className="subheading pt-5">FAQ</h2>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.thehotline.org/healthy-relationships/relationship-spectrum/" target="_blank" style={{ color: '#666' }}><strong>Am I in a healthy relationship?</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.ncadv.org/signs-of-abuse/" target="_blank" style={{ color: '#666' }}><strong>Signs of Abuse</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.thehotline.org/what-is-gaslighting/" target="_blank" style={{ color: '#666' }}><strong>What is Gaslighting</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.womenshealth.gov/relationships-and-safety/domestic-violence/leaving-abusive-relationship/" target="_blank" style={{ color: '#666' }}><strong>Creating a safety plan</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.womenslaw.org/about-abuse/leaving-abusive-relationship/" target="_blank" style={{ color: '#666' }}><strong>Tips on preparing to leave</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.womenslaw.org/about-abuse/safety-tips/safety-while-using-internet/" target="_blank" style={{ color: '#666' }}><strong>Internet Safety Tips</strong></a>
                    </div>
                    <div className="resource d-flex flex-column pb-3">
                        <a href="https://www.domesticshelters.org/articles/statistics/domestic-violence-statistics/" target="_blank" style={{ color: '#666' }}><strong>Domestic Violence Statistics</strong></a>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
export default Resources;