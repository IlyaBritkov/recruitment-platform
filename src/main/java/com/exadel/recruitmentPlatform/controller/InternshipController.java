package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipOnAdminPageResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipShortDto;
import com.exadel.recruitmentPlatform.service.InternshipService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@AllArgsConstructor
@RequestMapping("/api/internships")
public class InternshipController {

    private final InternshipService internshipService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<InternshipResponseDto> getInternshipById(@PathVariable Long id) {
        return ResponseEntity.ok(internshipService.get(id));
    }

    @Secured({"ROLE_SPECIALIST", "ROLE_ADMIN"})
    @PostMapping
    public ResponseEntity<InternshipResponseDto> create(@Valid @RequestBody InternshipDto internshipDto) {
        return ResponseEntity.ok(internshipService.create(internshipDto));
    }

    @GetMapping
    public List<InternshipResponseDto> getInternships() {
        return internshipService.getInternships();
    }

    @GetMapping(value = "/specialities/{specialityId}")
    public List<InternshipResponseDto> getInternshipsBySpeciality(@PathVariable Long specialityId) {
        return internshipService.getInternshipsBySpeciality(specialityId);
    }

    @GetMapping(value = "/countries/{countryId}")
    public List<InternshipResponseDto> getInternshipsByCountry(@PathVariable Long countryId) {
        return internshipService.getInternshipsByCountry(countryId);
    }

    @Secured({"ROLE_SPECIALIST", "ROLE_ADMIN"})
    @PutMapping(consumes = APPLICATION_JSON_VALUE,
            produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<InternshipResponseDto> updateInternship(
            @Valid @RequestBody InternshipDto dto) {
        return ResponseEntity.ok(internshipService.update(dto));
    }

    @Secured({"ROLE_SPECIALIST", "ROLE_ADMIN"})
    @GetMapping(value = "/ids-names")
    public List<InternshipShortDto> getIdsAndNamesOfInternships(){
        return internshipService.getIdsAndNamesOfInternships();
    }

}
