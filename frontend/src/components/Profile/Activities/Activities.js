import React, { useState, useEffect } from "react";
import UserDetails from "../UserDetails/UserDetails";
import "./Activities.css";
import connection from "../../../config.json";
import axios from "axios";
//import Questionstab from './Questions/Questionstab'

function Activities() {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios
            .get(`${connection.connectionURL}/api/answer`)
            .then(res => {
                console.log(res)
                setAnswers(res.data)
            })
    }, []);
    return (
        <div>
            <UserDetails />
            <div class="d-flex mb48">
                <nav
                    class="flex--item fl-shrink0 mr32 wmn1 md:d-none js-settings-nav"
                    role="navigation"
                >
                    <ul class="ps-sticky t64 s-navigation s-navigation__muted s-navigation__vertical">
                        <li>
                            <a
                                class="s-navigation--item is-selected pr48 ps-relative"
                                href="/Activities"
                                title="Answers this user provided"
                                data-shortcut="A"
                            >
                                Answers
                            </a>
                        </li>
                        <li>
                            <a
                                class="s-navigation--item pr48 ps-relative"
                                href="/questionstab"
                                title="Questions this user asked"
                                data-shortcut="Q"
                            >
                                Questions
                            </a>
                        </li>
                        <li>
                            <a
                                class="s-navigation--item pr48 ps-relative"
                                href="/UserTags/UserTags"
                                title="Tags this user has posts in"
                                data-shortcut="T"
                            >
                                Tags
                            </a>
                        </li>

                        <li>
                            <a
                                class="s-navigation--item pr48 ps-relative"
                                href="/ActivityBadges/ActivityBadges"
                                title="Badges this user has earned"
                                data-shortcut="B"
                            >
                                Badges
                            </a>
                        </li>
                        <li>
                            <a
                                class="s-navigation--item pr48 ps-relative"
                                href="/Bookmarkstab/Bookmarkstab"
                                title="Questions this user has bookmarked"
                                data-shortcut="F"
                            >
                                Bookmarks
                            </a>
                        </li>

                        <li>
                            <a
                                class="s-navigation--item pr48 ps-relative"
                                href="/Reputation/Reputation"
                                title="Reputation this user has earned"
                                data-shortcut="R"
                            >
                                Reputation
                            </a>
                        </li>
                    </ul>
                </nav>

                <section class="flex--item fl-grow1 wmx100">
                    <div id="user-tab-answers" class="js-user-tab">
                        <div class="d-flex ai-end jc-space-between mb8 fw-wrap">
                            <div class="flex--item fl-grow1">
                                <div class="d-flex fd-column">
                                    <h2 class="flex--item fs-title mb0">{answers.length} Answers</h2>
                                </div>
                            </div>
                            <div class="flex--item">
                                <div class="d-flex ai-end">
                                    <div class="flex--item s-btn-group js-user-tab-sorts fl-shrink0 md:fl-shrink1">
                                        <a
                                            href="/users/2901002/jezrael?tab=answers&amp;sort=votes"
                                            class="as-center s-btn s-btn__muted s-btn__outlined s-btn__xs js-user-tab-sort is-selected js-selected"
                                            data-sort="votes"
                                        >
                                            Score
                                        </a>
                                        <a
                                            href="/users/2901002/jezrael?tab=answers&amp;sort=activity"
                                            class="as-center s-btn s-btn__muted s-btn__outlined s-btn__xs js-user-tab-sort"
                                            data-sort="activity"
                                        >
                                            Activity
                                        </a>
                                        <a
                                            href="/users/2901002/jezrael?tab=answers&amp;sort=newest"
                                            class="as-center s-btn s-btn__muted s-btn__outlined s-btn__xs js-user-tab-sort"
                                            data-sort="newest"
                                        >
                                            Newest
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ba bc-black-100 bar-md">
                            <div id="js-post-summaries">
                                {
                                    answers.map(item => (
                                        <div
                                            id="answer-id-30359308"
                                            class="s-post-summary s-post-summary__minimal js-post-summary"
                                            data-post-id="30359308"
                                            data-post-type-id="2"
                                            key={item._id}
                                        >
                                            <div class="s-post-summary--stats js-post-summary-stats">
                                                {/* <div
                                                    class="s-post-summary--stats-item s-post-summary--stats-item__emphasized"
                                                    title="Score of 1845"
                                                >
                                                    <span class="s-post-summary--stats-item-number">
                                                        1845
                                                    </span>
                                                    <span class="s-post-summary--stats-item-unit">votes</span>
                                                </div> */}
                                            </div>
                                            <div class="s-post-summary--content">
                                                <h3 class="s-post-summary--content-title">
                                                    <a
                                                        href="/questions/123198/how-to-copy-files/30359308#30359308"
                                                        class="answer-hyperlink "
                                                    >
                                                        {item.answer}
                                                    </a>
                                                </h3>
                                                <div class="s-post-summary--meta">
                                                    <div class="s-post-summary--meta-tags tags js-tags t-python t-file t-copy t-filesystems t-file-copying">
                                                        {
                                                            item.tags.map(tag=>(
<a
                                                            href="/questions/tagged/python"
                                                            class="post-tag flex--item mt0 js-tagname-python"
                                                            title="show questions tagged 'python'"
                                                            rel="tag"
                                                        >
                                                            {tag}
                                                        </a>
                                                            ))
                                                        }
                                                        
                                                    </div>

                                                    <div class="s-user-card s-user-card__minimal">
                                                        <div class="s-user-card--info">
                                                            <div class="s-user-card--link d-flex gs4"></div>
                                                        </div>

                                                        <time class="s-user-card--time">
                                                            answered{" "}
                                                            <span
                                                                title="2015-05-20 20:01:48Z"
                                                                class="relativetime"
                                                            >
                                                                {item.created_at}
                                                            </span>
                                                        </time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>
    );
}

export default Activities;
