import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export const About = () => {
    return (
        <>
        <Header/>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col">
                        <h2 style={{ color: '#4CAF93' }}>Join our community</h2>
                        <p style={{ color: '#8BC34A', fontWeight: 'bold' }}>30-day, hassle-free money back guarantee</p>
                        <p className="text-muted">
                            Gain access to our full library of tutorials along with expert code reviews. <br />
                            Perfect for any developers who are serious about honing their skills.
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 p-3 mb-2 bg-primary text-white">
                            <p style={{
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                opacity: 0.8,
                                marginBottom: '12px',
                                margin: '0 0 12px 0',
                            }}>
                                Monthly Subscription
                            </p>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', margin: '0 0 6px 0' }}>
                                <span style={{ fontSize: '48px', fontWeight: '800', lineHeight: 1 }}>$29</span>
                                <span style={{ fontSize: '13px', opacity: 0.75 }}>per month</span>
                            </div>

                            <p style={{ fontSize: '13px', opacity: 0.85, margin: '0 0 28px 0' }}>
                                Full access for less than $1 a day
                            </p>

                            <button
                                style={{
                                    background: '#aaee44',
                                    color: '#1a3a10',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '13px 0',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    width: '100%',
                                    transition: 'transform 0.15s, box-shadow 0.15s',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                }}
                                onMouseEnter={e => {
                                    e.target.style.transform = 'translateY(-2px)'
                                    e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
                                }}
                                onMouseLeave={e => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                                }}
                            >
                                Sign Up
                            </button>
                        
                    </div>
                    <div className="col-6 p-3 mb-2 bg-info text-white">

                        <div style={{
                            width: '1px',
                            background: 'rgba(255,255,255,0.25)',
                            alignSelf: 'stretch',
                        }} />

                        <div style={{ flex: 1, minWidth: '220px' }}>
                            <p style={{
                                fontSize: '12px',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                opacity: 0.75,
                                marginBottom: '16px'
                            }}>Why Us</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {[
                                    'Tutorials by industry experts',
                                    'Peer & expert code review',
                                    'Coding exercises',
                                    'Access to our GitHub repos',
                                    'Community forum',
                                    'Flashcard decks',
                                    'New videos every week',
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', opacity: 0.9 }}>
                                        <span style={{
                                            width: '6px', height: '6px', borderRadius: '50%',
                                            background: '#aaee44', flexShrink: 0
                                        }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
