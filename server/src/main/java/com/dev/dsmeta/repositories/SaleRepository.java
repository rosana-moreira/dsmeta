package com.dev.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
