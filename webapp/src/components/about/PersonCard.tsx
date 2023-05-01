import { Avatar, Box, Card, CardContent, CardHeader, IconButton, styled, Typography } from "@mui/material";
import React, { useRef } from "react";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import  Arquisoft  from "../../img/Arquisoft.png";
class Person {
    name: string;
    image: string;
    description: string;
    github: string;

    constructor(name: string, image: string, description: string, github: string) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.github = github;
    }
}

interface PersonCardProps {
    person: Person;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
    const StyledAvatar = styled(Avatar)({
        width: 100,
        height: 100,
        margin: "auto"
    });

    const StyledCardHeader = styled(CardHeader)({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    });

    const buttonRef = useRef<HTMLAnchorElement>(null);

    return (
        <Card>
            <StyledCardHeader
                title={
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6">{person.name}</Typography>
                        <Typography variant="subtitle1">{person.github}</Typography>
                    </Box>

                }
                avatar={<StyledAvatar alt={person.name} src={person.image} />}
            />
            <CardContent>
                <Typography variant="body1">{person.description}</Typography>
            </CardContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton
                    aria-label={`View ${person.name}'s GitHub profile`}
                    component="a"
                    href={`https://github.com/${person.github}`}
                    target="_blank"
                    rel="noopener"
                    ref={buttonRef}
                >
                    <GitHubIcon />
                </IconButton>
            </div>


        </Card>
    );
};
